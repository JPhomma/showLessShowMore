import { Component, ReactNode, createElement } from "react";
import { TextContainer } from "./components/TextContainer";
import { ShowMorePreviewProps } from "../typings/ShowMoreProps";

declare function require(name: string): string;

export class preview extends Component<ShowMorePreviewProps> {
    render(): ReactNode {
        return <TextContainer stringAttribute={this.props.stringAttribute.valueOf()} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/ShowMore.css");
}
