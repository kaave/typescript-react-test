import * as React from 'react';
import { render } from 'react-dom';

export interface Props {
  message: string;
}

export interface State {
  count: number;
}

class SampleClass extends React.Component<Props, State> {
  static get defaultProps (): Props {
    return {
      message: 'Jane Doe'
    };
  }

  constructor (props: Props) {
    super(props);
    this.state = { count: 0 };
    this.onClick = this.onClick.bind(this);
  }

  onClick ({ target, currentTarget }: React.MouseEvent<HTMLDivElement>) {
    console.log(target, currentTarget);
    this.setState({ ...this.state, ...{ count: this.state.count + 1 }});
  }

  render (): JSX.Element {
    return (
      <div onClick={this.onClick}>Message: {this.props.message}, ClickCount: {this.state.count}</div>
    );
  }
}

export default function () {
  render(<SampleClass message="Hello Everyone!" />, document.getElementById('mount-point'));
}
