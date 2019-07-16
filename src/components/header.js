import React, { Component } from 'react';






class Header extends Component {
    render() {
        return (
            <div className  = "header">



<nav className = "header-nav"

style={{
    paddingBottom: '100px',
    backgroundColor:'black',
    boxShadow: 'none',
    letterSpacing: '-0.01em',
    color: '#FFFFFF',
    fontFamily: 'Barlow',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '17px',
  

}}
>
    <div class="nav-wrapper">
   
      <a href="" data-target="mobile-demo"
      class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
      <li><a href="sass.html"
        style = {{
            paddingRight: '100px'
        
        }}
        >PROMOS</a></li>
        <li><a href="badges.html"
         style = {{
            paddingRight: '100px'
        }}
        >Nueva Orden</a></li>
        <li><a href="collapsible.html"
         style = {{
            paddingRight: '200px'
        }}
        >Ordenes</a></li>
        <li><a href="mobile.html"
         style = {{
            paddingRight: '350px'
        }}
        >Menú</a></li>
        <li><a href="mobile.html"
         style = {{
            paddingRight: '50px',
            color: 'gray'
        }}
        >Cerrar Sesión</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
  <li><a href="sass.html">PROMOS</a></li>
        <li><a href="badges.html">Nueva Orden</a></li>
        <li><a href="collapsible.html">Ordenes</a></li>
        <li><a href="mobile.html">Menú</a></li>
        <li><a href="mobile.html">Cerrar Sesión</a></li>
  </ul>
  </div>
            
           
            );
        }
    }
    




    export default Header;


