var Map = function() {
    
    var _tailWidth = Game.config.tailSize.width;
    var _tailHeight = Game.config.tailSize.height;
    
    var _tiles = new TextureExploder(
            new PIXI.Texture(
                Loader.resources.Atlas.texture,
                { x: _tailWidth * 32, y: _tailHeight * 8, width: _tailWidth * 6, height: _tailHeight * 4 }
            )
        ).explode(_tailWidth, _tailHeight);

    var _flag = new TextureExploder(
            new PIXI.Texture(
                Loader.resources.Atlas.texture,
                { x: _tailWidth * 36, y: 0, width: _tailWidth * 4, height: _tailHeight* 2 }
            )
        ).explode(_tailWidth, _tailHeight);

    _tiles.push(_flag[0], _flag[1]);

    return _.extend({
        levelId: null,
        
        replaceCell: function(cellX, cellY, cellVal) {
            var mapSize = this.getMapSize();
            
            // Check map bounds
            if (cellX < 0 || cellY < 0 || cellX >= mapSize.width || cellY >= mapSize.height) {
                return false;
            }
            var map = this.getMap();
            map[cellY][cellX] = cellVal;
            this.getCell(cellX, cellY).texture = this.getTail(cellVal).texture;
            
            return this;
        },
        getCell: function(cellX, cellY) {
            return _.find(BattleCity.getChildrenByType(['tail']), function(tail) {
                return tail.cellX === cellX && tail.cellY === cellY;
            });
        },
        getTail: function(id) {
            var tailMap = [
                { x: 3, y: 1, zIndex: 0 }, // 0: Background
                { x: 0, y: 0, zIndex: 0 }, // 1: Brick
                { x: 1, y: 0, zIndex: 0 }, // 2: Brick
                { x: 2, y: 0, zIndex: 0 }, // 3: Brick
                { x: 3, y: 0, zIndex: 0 }, // 4: Brick
                { x: 4, y: 0, zIndex: 0 }, // 5: Brick
                { x: 0, y: 1, zIndex: 0 }, // 6: Сoncrete
                { x: 0, y: 2, zIndex: 0 }, // 7: Water
                { x: 1, y: 1, zIndex: 3 }, // 8: Tree
                { x: 2, y: 1, zIndex: 0 }, // 9: Swamp 
                
                { x: 0, y: 4, zIndex: 3 }, //10: Alive:left-top 
                { x: 1, y: 4, zIndex: 3 }, //11: Alive:right-top 
                { x: 0, y: 5, zIndex: 3 }, //12: Alive:left-bottom 
                { x: 1, y: 5, zIndex: 3 }, //13: Alive:right-bottom 
                
                { x: 2, y: 4, zIndex: 3 }, //14: Dead:left-top 
                { x: 3, y: 4, zIndex: 3 }, //15: Dead:right-top
                { x: 2, y: 4, zIndex: 3 }, //16: Dead:left-bottom
                { x: 3, y: 5, zIndex: 3 }  //17: Dead:right-bottom 
            ];
            var tail = new PIXI.Sprite(_tiles[tailMap[id].y][tailMap[id].x]);
            tail.zIndex = tailMap[id].zIndex;
            
            return tail;
        },
        getMap: function() {
            return Loader.resources['level' + this.levelId].data;
        },
        getMapCellAt: function(x, y) {
            return (x < 0 || y < 0 || x >= this.getMap()[0].length || y >= this.getMap().length) ? 0 : this.getMap()[y][x];
        },
        getMapSize: function() {
            return {
                width: this.getMap()[0].length,
                height: this.getMap().length
            };
        },
        load: function(levelId) {
            this.levelId = levelId;
            
            for (var i = 0; i < this.getMap().length; i++) {
                for (var j = 0; j < this.getMap()[i].length; j++) {
                    var tailId = this.getMap()[i][j];
                    var tileSprite = this.getTail(tailId);
                    tileSprite.position.x = j * _tailWidth;
                    tileSprite.position.y = i * _tailHeight;
                    tileSprite.render = function() {};
                    BattleCity.addModel(
                        _.extend(tileSprite, {
                            type: 'tail',
                            id: tailId,
                            cellX: j,
                            cellY: i
                        })
                    );
                }
            }
        }
    });
};