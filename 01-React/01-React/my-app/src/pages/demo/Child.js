import React from 'react';

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentWillMount(): void {
    console.log('will Mount')
  }

  componentDidMount(): void {
    console.log('did mount')
  }

  componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
    console.log('will props' + nextProps.name)
  }

  shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
    console.log('should update')
    return true
  }

  componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void {
    console.log('will update')
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
    console.log('did update')
  }

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
      )
  }
}