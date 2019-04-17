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

function getInfo(name){
  return name.getBoundingClientRect();
}

function getAtt(name,node){
  return node.getAttribute(name);
}

function setAtt(name,val,node){
   node.setAttribute(name,val);
}

function removeAtt(name,node){
  node.removeAttribute(name);
}

function hasAtt(name,node){
  return node.hasAttribute(name);
}

function int(num){
  return parseInt(num);
}

function float(num){
  return parseFloat(num);
}

function string(str){
  return toString(str);
}

function create(name){
  return document.createElement(name);
}

function append(name,node){
  node.appendChild(name);
}

function appendBefore(name,val,node=document){
  if(node==document)
    document.insertBefore(name,val);
  else
    node.insertBefore(name,val);
}

function replace(name, val, node=document){
  if(node==document)
    document.replaceChild(name,val);
  else
    node.replaceChild(name,val);
}

function remove(name,node=document){
  if(node==document)
    document.removeChild(name);
  else
    node.removeChild(name);
}

function clone(bool){
  return name.cloneNode(bool);
}
function isEqual(val1,val2){
  return val1.isEqualNode(val2);
}

function addEvent(name,func,bool,node){
  node.addEventListener(name,func,bool);
}

function removeEvent(name,func,bool,node){
  node.removeEventListener(name,func,bool);
}
