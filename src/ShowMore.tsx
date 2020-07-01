import { Component, ReactNode, createElement } from "react";
import { TextContainer } from "./components/TextContainer";
import { hot } from "react-hot-loader/root";
import { ShowMoreContainerProps } from "../typings/ShowMoreProps";
// import { ValueStatus } from "mendix";

import "./ui/ShowMore.css";

interface IShowMoreState {
    isMoreClicked?: boolean,
    displayText?: string,
    loading?: boolean
}

class ShowMore extends Component<ShowMoreContainerProps, IShowMoreState> {
    private readonly toggleTextHandle = this.toggleText.bind(this);

    constructor(props: Readonly<ShowMoreContainerProps>) {
        super(props)
        this.state = {
            isMoreClicked: false,
            displayText: '',
            loading: true
        }
    }

    componentDidUpdate() {
        if (this.props.stringAttribute.status === 'available' && this.state.loading === true) {
            let displayText = this.props.stringAttribute?.value?.slice(0, this.props.numberOfCharacters);
            const formatteddisplayText = this.getDisplayText(displayText!)
            this.setState({
                displayText: formatteddisplayText,
                loading: false
            })
        }
    }

    private toggleText() {
        if (!this.state.isMoreClicked) {
            let fullText = this.props.stringAttribute.value;
            if (fullText !== undefined) {
                this.setState({isMoreClicked: true, displayText: fullText})
            }
        } 
        else if (this.state.isMoreClicked) {
            let truncatedText = this.getDisplayText(this.props.stringAttribute?.value?.slice(0, this.props.numberOfCharacters)!);
            if (truncatedText !== undefined) {
                this.setState({isMoreClicked: false, displayText: truncatedText})
            }
        }
    }

    /*
    * If text ends with whitespace, remove it so leading dots will be after last character instead of a space
    * 
    * @param text - value of the string attribute
    * @returns the given string without the whitespace at the end or will return the provided string if no white space
    */
   private getDisplayText(text: string): string {
    let textToDisplay = text
    if (textToDisplay !== '' && textToDisplay !== undefined) {
        if (textToDisplay.endsWith('')) {
            textToDisplay = textToDisplay.slice(0, textToDisplay.length - 1)
        }
    }
    return textToDisplay
}
    
    render(): ReactNode {
        const textToDisplay = this.state.displayText !== undefined ? this.state.displayText : this.props.stringAttribute.value;
        const linkText = this.state.isMoreClicked ? this.props.lessLinkText : this.props.moreLinkText;
        return <TextContainer 
                    stringAttribute={textToDisplay}
                    linkText={linkText}
                    toggleText={this.toggleTextHandle}
                />;
    }
}

export default hot(ShowMore);
