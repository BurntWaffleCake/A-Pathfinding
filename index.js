var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2.prototype.equals = function (other) {
        return other.x === this.x && other.y === this.y;
    };
    return Vector2;
}());
var PathNode = /** @class */ (function () {
    function PathNode(position, parent) {
        this.successor_directions = [
            { distance: 10, direction: new Vector2(1, 0) },
            { distance: 10, direction: new Vector2(-1, 0) },
            { distance: 10, direction: new Vector2(0, 1) },
            { distance: 10, direction: new Vector2(0, -1) },
            { distance: 14, direction: new Vector2(1, 1) },
            { distance: 14, direction: new Vector2(-1, 1) },
            { distance: 14, direction: new Vector2(1, -1) },
            { distance: 14, direction: new Vector2(-1, -1) },
        ];
        this.position = position;
        this.parent = parent;
        this.g = 0;
        this.h = 0;
        this.f = 0;
    }
    PathNode.prototype.returnSuccessors = function () { };
    return PathNode;
}());
