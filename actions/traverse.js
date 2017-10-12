const traverseTree = (tree, dest) => {
  let queue = [];
  let newQueue = [];
  let foundDest = false;
  tree.forEach((elem)=> {
    if (elem.dis === dest) {
      foundDest = true; 
    }
    queue.push(elem); 
  });
  if (foundDest = true) {
    return queue; 
  }
  while(queue) {
    let next = queue.shift(); 
    next.children.forEach((child)=> {
      if (child.dis === dest || child.id === dest) {
        foundDest = true; 
      }
      newQueue.push(next.children);
    });
    if (foundDest === true) {
      return newQueue;
    }
    queue = newQueue;
    newQueue = [];
  }
  return queue;

};

export default traverseTree;
