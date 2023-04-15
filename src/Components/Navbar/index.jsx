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
  Icon,
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
      <WrapIcons>
      <SocialIcons>
        {Socialdata.map((item)=>{
          return(
            <SocialItems key={item.id}>
            <SocialLink to={item.url}>
              <Icon src={item.Icon}></Icon>
            </SocialLink>
            </SocialItems>
          )
        })

        }
      </SocialIcons>
      <MenuIcon onClick={handleClick}>
              { click ? <CrossbarIcon /> : <MenubarIcon/>}
      </MenuIcon>
      </WrapIcons>
    </Nav>
  )
}

export default Navbar
