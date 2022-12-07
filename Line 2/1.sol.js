

/*There is a park whose width is l m in the north-south direction and l m in the east-west direction.
The southwest vertex is considered to be the origin (0,0) and the point (x,y) is defined to be x m to the
east and y m to the north from the origin.

Beginning now, n fences will be placed in this park. one at time in numerical order. the i-th fence connects
point (ai,bi) with point (ci,di). Several fences may intersect each other.

Create a program to determine whether it is possible to get from point (0,0) to point(l,l) after n fences are set up.
Note that "point B is reachable from point A" if there is a curve connecting point A and point B that does not intersect
the fence and does not go outside the park. If the answer is that point (l,l) is unreachable, the program should additionally
print how many fences were put up before point(l,l) first became unreachable.


*/

var isPath = function(fences, start, end) {
  var isPath = true;
  for (var i = 0; i < fences.length; i++) {
    var fence = fences[i];
    if (fence.start.x === fence.end.x) {
      if (fence.start.x > start.x && fence.start.x < end.x) {
        if (fence.start.y > start.y && fence.start.y < end.y) {
          isPath = false;
        }
      }
    } else {
      if (fence.start.y > start.y && fence.start.y < end.y) {
        if (fence.start.x > start.x && fence.start.x < end.x) {
          isPath = false;
        }
      }
    }
  }
  return isPath;
};