/**
 * This file was generated from ShowMore.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface ShowMoreContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    stringAttribute: EditableValue<string>;
    numberOfCharacters: number;
    moreLinkText?: string;
    lessLinkText?: string;
}

export interface ShowMorePreviewProps {
    class: string;
    style: string;
    stringAttribute: string;
    numberOfCharacters: number | null;
    moreLinkText: string;
    lessLinkText: string;
}
