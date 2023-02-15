import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Container,
  Form,
  Label,
  Input,
  FormGroup,
  CardHeader,
} from "reactstrap";
const CreateApprovalDocument = () => {
  return (
    <Card>

      <CardBody>
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" md={1}>
              결재양식
            </Label>
            <Col md={4}>
              <Input type="dropdown" name="email" id="exampleEmail" placeholder="" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" md={1}>
              결재선
            </Label>
            <Col md={4}>
              <Input type="" name="email" id="exampleEmail" placeholder="" />
            </Col>
            <Col md={2}>
              <Input type="" name="email" id="exampleEmail" placeholder="" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" md={1}></Label>
            <Col md={6}>
              <Input type="" name="email" id="exampleEmail" placeholder="" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" md={1}>
              첨부파일
            </Label>
            <Col md={3}>
              <Input type="" name="email" id="exampleEmail" placeholder="" />
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};
export default CreateApprovalDocument;
