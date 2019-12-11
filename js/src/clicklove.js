onload=function(){var click_cnt=0;var $html=document.getElementsByTagName("html")[0];var $body=document.getElementsByTagName("body")[0];$html.onclick=function(e){var $elem=document.createElement("b");$elem.style.color="#E94F06";$elem.style.zIndex=9999;$elem.style.position="absolute";$elem.style.select="none";var x=e.pageX;var y=e.pageY;$elem.style.left=(x-10)+"px";$elem.style.top=(y-20)+"px";clearInterval(anim);switch(++click_cnt){case 10:$elem.innerText="🤩";break;case 20:$elem.innerText="😎";break;case 30:$elem.innerText="😏";break;case 40:$elem.innerText="😐";break;case 50:$elem.innerText="😑";break;case 60:$elem.innerText="😒";break;case 70:$elem.innerText="૮( ᵒ̌皿ᵒ̌ )ა";break;case 80:$elem.innerText="(╯°口°)╯(┴—┴";break;case 90:$elem.innerText="别点啦";break;case 100:case 101:case 102:case 103:case 104:case 105:$elem.innerText="休息会儿";break;default:$elem.innerText="🐱‍🏍";break}$elem.style.fontSize=Math.random()*10+8+"px";var increase=0;var anim;setTimeout(function(){anim=setInterval(function(){if(++increase==150){clearInterval(anim);$body.removeChild($elem)}$elem.style.top=y-20-increase+"px";$elem.style.opacity=(150-increase)/120},8)},70);$body.appendChild($elem)}};
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
       // $('[rel="icon"]').attr('href', "/images/TEP.ico"); //如果需要图标一起变，那么就将这行取消注释并选择正确的图片路径
        document.title = ' 🌝不看了就关掉 ~';//要显示的信息
        clearTimeout(titleTime);
    }
    else {
        //$('[rel="icon"]').attr('href', "/favicon.ico"); 同上
        document.title = '🌞欢迎回来~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});


/*!
 * Fairy Dust Cursor.js
 * - 90's cursors collection
 * -- https://github.com/tholman/90s-cursor-effects
 * -- http://codepen.io/tholman/full/jWmZxZ/
 */

(function fairyDustCursor() {
  
    var possibleColors = ["#D61C59", "#E7D84B", "#1B8798"]
    var width = window.innerWidth;
    var height = window.innerHeight;
    var cursor = {x: width/2, y: width/2};
    var particles = [];
    
    function init() {
      bindEvents();
      loop();
    }
    
    // Bind events that are needed
    function bindEvents() {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchstart', onTouchMove);
      
      window.addEventListener('resize', onWindowResize);
    }
    
    function onWindowResize(e) {
      width = window.innerWidth;
      height = window.innerHeight;
    }
    
    function onTouchMove(e) {
      if( e.touches.length > 0 ) {
        for( var i = 0; i < e.touches.length; i++ ) {
          addParticle( e.touches[i].clientX, e.touches[i].clientY, possibleColors[Math.floor(Math.random()*possibleColors.length)]);
        }
      }
    }
    
    function onMouseMove(e) {    
      cursor.x = e.clientX;
      cursor.y = e.clientY;
      
      addParticle( cursor.x, cursor.y, possibleColors[Math.floor(Math.random()*possibleColors.length)]);
    }
    
    function addParticle(x, y, color) {
      var particle = new Particle();
      particle.init(x, y, color);
      particles.push(particle);
    }
    
    function updateParticles() {
      
      // Updated
      for( var i = 0; i < particles.length; i++ ) {
        particles[i].update();
      }
      
      // Remove dead particles
      for( var i = particles.length -1; i >= 0; i-- ) {
        if( particles[i].lifeSpan < 0 ) {
          particles[i].die();
          particles.splice(i, 1);
        }
      }
      
    }
    
    function loop() {
      requestAnimationFrame(loop);
      updateParticles();
    }
    
    /**
     * Particles
     */
    
    function Particle() {
  
      this.character = "*";
      this.lifeSpan = 120; //ms
      this.initialStyles ={
        "position": "fixed",
        "top": "0", //必须加
        "display": "block",
        "pointerEvents": "none",
        "z-index": "10000000",
        "fontSize": "20px",
        "will-change": "transform"
      };
  
      // Init, and set properties
      this.init = function(x, y, color) {
  
        this.velocity = {
          x:  (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
          y: 1
        };
        
        this.position = {x: x - 10, y: y - 20};
        this.initialStyles.color = color;
        console.log(color);
  
        this.element = document.createElement('span');
        this.element.innerHTML = this.character;
        applyProperties(this.element, this.initialStyles);
        this.update();
        
        document.body.appendChild(this.element);
      };
      
      this.update = function() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.lifeSpan--;
        
        this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + (this.lifeSpan / 120) + ")";
      }
      
      this.die = function() {
        this.element.parentNode.removeChild(this.element);
      }
      
    }
    
    /**
     * Utils
     */
    
    // Applies css `properties` to an element.
    function applyProperties( target, properties ) {
      for( var key in properties ) {
        target.style[ key ] = properties[ key ];
      }
    }
    
    init();
  })();
  
  
  

