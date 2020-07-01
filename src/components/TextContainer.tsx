import { Component, ReactNode, createElement } from "react";


export interface TextContainerProps {
    stringAttribute?: string;
    linkText?: string;
    toggleText?: () => void;
}



export class TextContainer extends Component<TextContainerProps> {

    render(): ReactNode {
        const text = this.props.stringAttribute?.valueOf();
        return <div>{text}...<a onClick={this.props.toggleText}>{this.props.linkText}</a></div>;
    }
}
