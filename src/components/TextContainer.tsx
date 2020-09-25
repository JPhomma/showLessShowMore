import { Component, ReactNode, createElement } from "react";

export interface TextContainerProps {
    stringAttribute?: string;
    linkText?: string;
    toggleText?: () => void;
}


export class TextContainer extends Component<TextContainerProps> {
 
    render(): ReactNode {
        const content = this.props.stringAttribute?.valueOf() || "";
            return <div>{content}<a onClick={this.props.toggleText}>{this.props.linkText}</a></div>;
        }    
    }