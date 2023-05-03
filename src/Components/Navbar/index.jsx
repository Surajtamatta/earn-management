import React,{useState}from 'react';
import {
  Nav,
  Logo,
  Navmenu,
  Wrapper,
  MenuItems,
  MenuLinks,
  WrapIcons,
  SocialIcons,
  SocialItems,
  SocialLink,
  MenuIcon,
  MenubarIcon,
  CrossbarIcon,
  
} from "../../style/NavbarStyle";
import {Navdata,Socialdata} from './Navdata';

const Navbar = () => {

  const [click,setclick]=useState(false)
  const handleClick=()=>setclick(!click)

  return (
    <Nav>
      <Logo/>
      <Wrapper >
      <Navmenu click={click}>
      {
				Navdata.map((item,index) => {
					return (
						<MenuItems key={index}>
							<MenuLinks  to={item.url}>{item.Name}</MenuLinks>
						</MenuItems>
					)
				})
			}
      </Navmenu>

      </Wrapper>
      
      <WrapIcons click={click}>
      <SocialIcons  >
        {Socialdata.map((item)=>{
          return(
            <SocialItems key={item.id}>
            <SocialLink to={item.url}> <item.Icon/> </SocialLink>
            </SocialItems>
          )
        })

        }
      </SocialIcons> 
      </WrapIcons>
      
      <MenuIcon onClick={handleClick}>
              { click ? <CrossbarIcon /> : <MenubarIcon/>}
      </MenuIcon>
    </Nav>
  )
}

export default Navbar
