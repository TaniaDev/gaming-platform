import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import JoyStick from '../../public/joystick.png'
import {
    Box,
    ButtonAction,
    ButtonDetails,
    ButtonSeeAll,
    ImageBackground,
    Item,
    Logo,
    Main,
    Menu,
    Nav,
    Page,
    Square,
    Subtitle,
    Tag,
    Text,
    Title
} from '../styles'

export default function Home () {
  return (
    <>
        <Head>
            <title>Home</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Nav>
                <Logo>
                    <strong>LOGO</strong>
                </Logo>
                <Menu>
                    <Item href="#">Home</Item>
                    <Item href="#">About Us</Item>
                    <Item href="#">Portfolio</Item>
                    <Item href="#">News</Item>
                    <ButtonAction>Contact Us</ButtonAction>
                </Menu>
            </Nav>
        </header>
        <Page>
            <section>
                <Main>
                    <Tag>3D game Dev</Tag>
                    <Title>Work that we <br/> produce for our<br/> clients</Title>
                    <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                    <ButtonDetails>
                        Get more details
                    </ButtonDetails>
                </Main>
                <ImageBackground>
                    <Image
                        src={JoyStick}
                        alt="Joy Stick"
                    />
                </ImageBackground>
            </section>
            <section>
                <Box>
                    <h3>Currently Trending Games</h3>
                    <ButtonSeeAll>SEE ALL</ButtonSeeAll>
                </Box>
                <Box>
                    <div>
                        <Square />
                        <Subtitle>
                            40 Followers
                        </Subtitle>
                    </div>
                    <div>
                        <Square />
                        <Subtitle>
                            40 Followers
                        </Subtitle>
                    </div>
                    <div>
                        <Square />
                        <Subtitle>
                            40 Followers
                        </Subtitle>
                    </div>
                    <div>
                        <Square />
                        <Subtitle>
                            40 Followers
                        </Subtitle>
                    </div>
                </Box>
            </section>
        </Page>
    </>
  )
}
