import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

const AppBlock = styled.div`
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`;
const ButtonGroup = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;
const palette = { blue: '#228be6', gray: '#496057', pink: '#f06595' };
function App() {
    const [dialog, setDialog] = useState(false);
    const onClick = () => {
        setDialog(true);
    };
    const onConfirm = () => {
        console.log('확인');
        setDialog(false);
    };
    const onCancel = () => {
        console.log('취소');
        setDialog(false);
    };
    return (
        <ThemeProvider theme={{ palette }}>
            <>
                <AppBlock>
                    <Button color="pink" size="large" onClick={onClick}>
                        삭제
                    </Button>
                    <ButtonGroup>
                        <Button size="large">BUTTON</Button>
                        <Button color="gray">BUTTON</Button>
                        <Button size="small" color="pink">
                            BUTTON
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button size="large" outline>
                            BUTTON
                        </Button>
                        <Button color="gray" outline>
                            BUTTON
                        </Button>
                        <Button size="small" color="pink" outline>
                            BUTTON
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button size="large" fullWidth>
                            BUTTON
                        </Button>
                        <Button size="large" color="gray" fullWidth>
                            BUTTON
                        </Button>
                        <Button size="large" color="pink" fullWidth>
                            BUTTON
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button size="large" fullWidth outline>
                            BUTTON
                        </Button>
                        <Button size="large" color="gray" fullWidth outline>
                            BUTTON
                        </Button>
                        <Button size="large" color="pink" fullWidth outline>
                            BUTTON
                        </Button>
                    </ButtonGroup>
                </AppBlock>
                <Dialog
                    title="정말로 삭제하시겠습니까?"
                    confirmText="삭제"
                    cancelText="취소"
                    visible={dialog}
                    onConfirm={onConfirm}
                    onCancel={onCancel}
                >
                    데이터를 정말로 삭제 하시겠습니까?
                </Dialog>
            </>
        </ThemeProvider>
    );
}

export default App;
