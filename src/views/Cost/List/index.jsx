import React from 'react';
import PanelBox from '../../../components/PanelBox';
import SearchForm from './SearchForm';
import SearchTable from './SearchTable';

class RegistrationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }

  render() {
    return (
      <PanelBox title="查账">
        <SearchForm />
        <SearchTable />
      </PanelBox>
    );
  }
}

export default RegistrationForm;

