import styled from 'styled-components'

export const ContentWrapperStyle = styled.div`
    // background: linear-gradient(180deg, hsla(144, 89%, 22%, 1) 4%, hsla(0, 0%, 100%, 1) 100%);
    background: linear-gradient(to bottom, #${props => props.$bgcolor || '119B1E'}, #fff);
    background-size: 100% 750px;
    background-repeat: no-repeat;
    width: 100%;
    margin: auto;
    &> div {
        max-width: 1200px;
        margin: auto;
        background: linear-gradient(180deg, hsla(130, 30%, 88%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);
        h1 {
            padding: 40px 0px 0px 60px;
        }
        .contentHtwo {
            padding: 0px 20px 0px 60px;
        }
    }
    .subTitle {
        color: #119B1E;
    }
`