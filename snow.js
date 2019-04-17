function getId(name,node=null){
  if(node==null)
    return document.getElementById(name);
  else
    return node.getElementById(name);
}
function getClass(name,node=null){
  if(node==null)
    return document.getElementsByClassName(name);
  else
    return node.getElementsByClassName(name);
}
function getTag(name,node=null){
  if(node==null)
    return document.getElementsByTagName(name);
  else
    return node.getElementsByTagName(name);
}
function getName(name,node=null){
  if(node==null)
    return document.getElementsByName(name);
  else
    return node.getElementsByName(name);
}
function getSelector(name,node=null){
  if(node==null)
    return document.querySelector(name);
  else
    return node.querySelector(name);
}
function getSelectors(name,node=null){
  if(node==null)
    return document.querySelectorAll(name);
  else
    return node.querySelectorAll(name);
}

function getParent(name){
  return name.parentNode;
}

function getChilds(name){
  return name.childNodes;
}

function getBefore(name){
  do{
       name = name.previousSibling;
  }while(name.innerHTML==undefined);
  return name;
}

function getAfter(name){
  do{
       name = name.nextSibling;
  }while(name.innerHTML==undefined);
  return name;
}
