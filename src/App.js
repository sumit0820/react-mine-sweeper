import React from 'react';

// UI elements
import { Button, Card, CardBody, CardTitle, Table, Container, Row, Col } from 'reactstrap';

// Css styling
import './App.css';

// Constants
import { appConstants } from './constants'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputArray: appConstants.DEFAULT_ARRAY
        }
    }

    handleInputArray = (reset) => {
        let { inputArray } = this.state;
        let finalOutput = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
        if (reset) {
            finalOutput = []
        } else {
            inputArray.map((item, itemIndex) => {
                item && item.length > 0 && item.map((innerItem, innerItemIndex) => {
                    if (innerItem === 1) {
                        finalOutput[itemIndex][innerItemIndex] = 9;
                    } else if (innerItem === 0) {
                        let count = 0
                        if (item[innerItemIndex - 1] && item[innerItemIndex - 1] === (1 || 9)) {
                            count++;
                        }
                        if (item[innerItemIndex + 1] === (1 || 9)) {
                            count++;
                        }
                        if (inputArray[itemIndex - 1] && inputArray[itemIndex - 1][innerItemIndex] && inputArray[itemIndex - 1][innerItemIndex] === (1 || 9)) {
                            count++;
                        }
                        if (inputArray[itemIndex - 1] && inputArray[itemIndex - 1][innerItemIndex - 1] && inputArray[itemIndex - 1][innerItemIndex - 1] === (1 || 9)) {
                            count++;
                        }
                        if (inputArray[itemIndex - 1] && inputArray[itemIndex - 1][innerItemIndex + 1] && inputArray[itemIndex - 1][innerItemIndex + 1] === (1 || 9)) {
                            count++;
                        }
                        if (inputArray[itemIndex + 1] && inputArray[itemIndex + 1][innerItemIndex + 1] && inputArray[itemIndex + 1][innerItemIndex + 1] === (1 || 9)) {
                            count++;
                        }
                        if (inputArray[itemIndex + 1] && inputArray[itemIndex + 1][innerItemIndex - 1] && inputArray[itemIndex + 1][innerItemIndex - 1] === (1 || 9)) {
                            count++;
                        }
                        if (inputArray[itemIndex + 1] && inputArray[itemIndex + 1][innerItemIndex] && inputArray[itemIndex + 1][innerItemIndex] === (1 || 9)) {
                            count++;
                        }
                        finalOutput[itemIndex][innerItemIndex] = count;
                    }
                })
            })
        }
        this.setState({
            outputArray: finalOutput
        })
    }

    render() {
        let { inputArray, outputArray } = this.state;
        return ( 
        <div className = "App">
            <Container>
                <Row style = {{ marginBottom: '15px' }}>
                <Col sm={12} >
                    <h3>Mine Sweeper</h3> 
                </Col>
                </Row> 
                <Row>
            <Col sm = { 6 }>
            <h4> Input Array </h4> 
            </Col> 
            <Col sm = { 6 } >
            <h4> Output Array </h4> 
            </Col> 
            </Row>
            <Row >
            <Col sm = { 6 } >
            <Table bordered >
            <tbody > {
                inputArray && inputArray.length > 0 &&
                inputArray.map((item, index) => {
                    return <tr key = { index } > {
                            item && item.length > 0 && item.map((innerItem, index) => {
                                return <td key = { index } > { innerItem } </td>
                            })
                        } </tr>
                })
            } </tbody> 
            </Table> 
            </Col> 
            <Col sm = { 6 } >
            <Table bordered >
            <tbody > {
                outputArray && outputArray.length > 0 &&
                outputArray.map((item, index) => {
                    return <tr key = { index } > {
                            item && item.length > 0 && item.map((innerItem, index) => {
                                return <td key = { index } > { innerItem } </td>
                            })
                        } </tr>
                })
            } </tbody> 
            </Table> 
            </Col> 
            </Row> 
            <Row>
            <Col>
            <Button disabled = { outputArray && outputArray.length > 0 }
            onClick = {
                () => this.handleInputArray(false) }
            color = "primary" >
            Submit 
            </Button> 
            </Col> 
            <Col >
            <Button disabled = { outputArray && outputArray.length > 0 ? false : true }
            onClick = {
                () => this.handleInputArray(true) }
            color = "danger" >
            Reset 
            </Button> 
            </Col> 
            </Row> 
            </Container> 
            </div>
        );
    }
}

export default App;