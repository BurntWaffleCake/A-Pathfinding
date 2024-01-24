class Vector2 {
  x: number;
  y: number;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(other: Vector2): boolean {
    return other.x === this.x && other.y === this.y;
  }
}

class PathNode {
  position: Vector2;
  parent?: PathNode;
  g: number;
  h: number;
  f: number;

  static successor_directions: { distance: number; direction: Vector2 }[] = [
    { distance: 10, direction: new Vector2(1, 0) },
    { distance: 10, direction: new Vector2(-1, 0) },
    { distance: 10, direction: new Vector2(0, 1) },
    { distance: 10, direction: new Vector2(0, -1) },

    { distance: 14, direction: new Vector2(1, 1) },
    { distance: 14, direction: new Vector2(-1, 1) },
    { distance: 14, direction: new Vector2(1, -1) },
    { distance: 14, direction: new Vector2(-1, -1) },
  ];

  constructor(position: Vector2, parent?: PathNode) {
    this.position = position;
    this.parent = parent;
    this.g = 0;
    this.h = 0;
    this.f = 0;
  }

  equals(node: PathNode): boolean {
    return this.position.equals(node.position);
  }

  returnSuccessors(): PathNode[] {
    var nodes: PathNode[] = [];
    PathNode.successor_directions.forEach((value) => {
      let newNode = new PathNode(new Vector2(this.position.x + value.direction.x, this.position.y + value.direction.y), this);
      newNode.g = this.g + value.distance;
      nodes.push(newNode);
    });
    return nodes;
  }
}
