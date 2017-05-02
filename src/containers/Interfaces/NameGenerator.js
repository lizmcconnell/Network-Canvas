import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actionCreators as networkActions } from '../../ducks/modules/network';
import { activeNodeAttributes } from '../../selectors/session';
import { activeNetwork } from '../../selectors/network';

import { PromptSwiper, NodeProviderPanels } from '../../containers/Elements';
import { NodeList, Modal, Form } from '../../components/Elements';

/**
  * This would/could be specified in the protocol, and draws upon ready made components
  */
class NameGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleAddNode = (node, _, form) => {
    const {
      addNode,
      activeNodeAttributes,
    } = this.props;

    if (node) {
      addNode({ ...node, ...activeNodeAttributes });
      form.reset();  // Is this the "react/redux way"?
      this.toggleModal();
    }
  }

  render() {
    const {
      prompts,
      form,
      panels,
      activeNetwork,
    } = this.props;

    return (
      <div className='interface'>
        <div className='interface__aside'>
          <NodeProviderPanels config={ panels } />
        </div>
        <div className='interface__primary'>
          <PromptSwiper prompts={ prompts } />

          <NodeList network={ activeNetwork } />

          <button onClick={ this.toggleModal }>
            Add a person
          </button>

          <Modal show={ this.state.isOpen } onClose={ this.toggleModal }>
            <h4>{ form.title }</h4>
            <Form { ...form } form={ form.formName } onSubmit={ this.handleAddNode }/>
          </Modal>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    network: state.network,
    protocol: state.protocol,
    prompts: ownProps.config.params.prompts,
    form: ownProps.config.params.form,
    panels: ownProps.config.params.panels,
    activeNodeAttributes: activeNodeAttributes(state),
    activeNetwork: activeNetwork(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNode: bindActionCreators(networkActions.addNode, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameGenerator);