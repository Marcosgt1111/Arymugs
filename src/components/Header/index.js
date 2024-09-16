import React from 'react'
import logo from '../../assets/logo-projeto.png';

function Header() {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="logo bibliotech"/>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Bibliotech</Menu>
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }
