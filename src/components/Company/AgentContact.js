import React from 'react';
import { Row, Col } from 'antd';
import Heading from '@/components/ui/Heading/Heading';
import Text from '@/components/ui/Text/Text';
import Loader from '@/components/Loader/Loader';
import ContactForm from '@/components/ContactForm/ContactFrom';
import { AgentContactWrapper, ContactDetails } from './AgentDetails.style';
import isEmpty from 'lodash/isEmpty';

const AgentContact = (props) => {
  const { processedData, loading } = props;
  if (isEmpty(processedData) || loading) return <Loader />;
  const { agent_location, cell_number, email } = processedData[0];

  return (
    <AgentContactWrapper>
      <Heading content="Send Message" />
      <Row gutter={30}>
        <Col lg={16} md={12} sm={24} xs={24}>
          <ContactForm />
        </Col>
        <Col lg={8} md={12} sm={24} xs={24}>
          <ContactDetails>
            <Heading as="h3" content="Phone No" />
            <Text content={cell_number} />
            <Heading as="h3" content="Email" />
            <Text content={email} />
            <Heading as="h3" content="Address" />
            <Text content={agent_location.formattedAddress} />
          </ContactDetails>
        </Col>
      </Row>
    </AgentContactWrapper>
  );
};

export default AgentContact;
