import React from 'react';
import { Button, ButtonGroup, Card, CardBody, CardFooter, Form, CardHeader, Col, Row } from 'reactstrap';


const EditComponent = (props) => {
    const Title = (props) => {
        return (<>
            <h3>Edit {props.Name}</h3>
            <p className="text-info">
                {props.Description}
            </p>
        </>)
    }
    return (
        <Row>
            <Col md="2"></Col>
            <Col xs="12" md="8">
                <Card>
                    <CardHeader>
                        <Title {...props.Title} />
                    </CardHeader>
                    <CardBody>
                        <Form action="" method="post" className="form-horizontal">
                            {props.Content}
                        </Form>
                    </CardBody>
                    <CardFooter>
                        <ButtonGroup>
                            <Button type="submit" onClick={props.Cancel} size="sm" color="dark"><i className="fa fa-ban"></i>Cancel</Button>
                            <Button type="submit" onClick={props.HandleSubmit} size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Save Changes</Button>                
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Col>
            <Col md="2"></Col>
        </Row>
    )
}
export default EditComponent;