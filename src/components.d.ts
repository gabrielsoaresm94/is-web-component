/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IToggleOptions } from "./components/readmore/readmore.interface";
export namespace Components {
    interface IsAlert {
        /**
          * If `true` alert will close automatically.
         */
        "autoClose": boolean;
        /**
          * Number of seconds to close alert automatically if autoClose `true`.
         */
        "closeSecs": number;
        /**
          * Customized close button text.
         */
        "closeText"?: string;
        /**
          * If closable or not.
         */
        "closeable": boolean;
        /**
          * The color options are: `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"error"`, `"light"`, `"info"`, `"white"`, `"black"`, and `"dark"`.
         */
        "color"?: string;
        /**
          * If `true`, make the alert rounded.
         */
        "rounded"?: boolean;
    }
    interface IsBadge {
        /**
          * The color options are: `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"error"`, `"light"`, `"info"`, `"white"`, `"black"`, and `"dark"`.
         */
        "color"?: string;
        /**
          * If `true`, make the badge rounded.
         */
        "rounded"?: boolean;
        /**
          * The text to display in the badge.
         */
        "text": string;
    }
    interface IsModal {
        /**
          * The text to display in the cancel button.
         */
        "cancelText": string;
        /**
          * If 'true' will show the modal header.
         */
        "modalHeader": boolean;
        /**
          * The title to display in the modal.
         */
        "modalTitle": string;
        /**
          * The text to display in the save button.
         */
        "saveText": string;
        /**
          * If 'true' will make the modal visible.
         */
        "visible": boolean;
    }
    interface IsMultiselect {
        /**
          * Enable/disable closing after selecting an option
         */
        "closeOnSelect": boolean;
        /**
          * If `true`, the user cannot interact with the select.
         */
        "disabled": boolean;
        /**
          * Get the selected items.
         */
        "getSelected": () => Promise<ISelectItem[] | undefined>;
        /**
          * The options list items.
         */
        "items": ISelectItem[];
        /**
          * The label when option is selected.
         */
        "labelSelected": string;
        /**
          * The label to remove or select.
         */
        "labelTo": ILabelTo;
        /**
          * Limit the display of selected options. The rest will be hidden within the limitText string.
         */
        "limit": number;
        /**
          * Function that process the message shown when selected elements pass the defined limit.
         */
        "limitText": Function;
        /**
          * Maximum selected items can be selected.
         */
        "max": number;
        /**
          * The text to display when not selected items.
         */
        "placeholder": string;
        /**
          * The selected items.
         */
        "selected": ISelectItem[];
        /**
          * If `true`, The badges will show selected items.
         */
        "showSelectedBadge": boolean;
    }
    interface IsPagination {
        /**
          * The color options are: `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"error"`, `"light"`, `"info"`, `"white"`, `"black"`, and `"dark"`.
         */
        "color"?: string;
        /**
          * Current page number, starting from 1
         */
        "currentPage": number | string;
        /**
          * Number of rows per page
         */
        "perPage": number | string;
        /**
          * Total number of rows in the dataset
         */
        "totalRows": number | string;
    }
    interface IsReadmore {
        /**
          * The options to config toggle text.
         */
        "toggleOptions": IToggleOptions;
    }
    interface IsTab {
        /**
          * Indicates if tab is blocked
         */
        "disable": boolean;
        /**
          * Indicates if tab is active
         */
        "isactive": boolean;
        /**
          * Customized name tab
         */
        "label": string;
    }
    interface IsTabs {
    }
}
declare global {
    interface HTMLIsAlertElement extends Components.IsAlert, HTMLStencilElement {
    }
    var HTMLIsAlertElement: {
        prototype: HTMLIsAlertElement;
        new (): HTMLIsAlertElement;
    };
    interface HTMLIsBadgeElement extends Components.IsBadge, HTMLStencilElement {
    }
    var HTMLIsBadgeElement: {
        prototype: HTMLIsBadgeElement;
        new (): HTMLIsBadgeElement;
    };
    interface HTMLIsModalElement extends Components.IsModal, HTMLStencilElement {
    }
    var HTMLIsModalElement: {
        prototype: HTMLIsModalElement;
        new (): HTMLIsModalElement;
    };
    interface HTMLIsMultiselectElement extends Components.IsMultiselect, HTMLStencilElement {
    }
    var HTMLIsMultiselectElement: {
        prototype: HTMLIsMultiselectElement;
        new (): HTMLIsMultiselectElement;
    };
    interface HTMLIsPaginationElement extends Components.IsPagination, HTMLStencilElement {
    }
    var HTMLIsPaginationElement: {
        prototype: HTMLIsPaginationElement;
        new (): HTMLIsPaginationElement;
    };
    interface HTMLIsReadmoreElement extends Components.IsReadmore, HTMLStencilElement {
    }
    var HTMLIsReadmoreElement: {
        prototype: HTMLIsReadmoreElement;
        new (): HTMLIsReadmoreElement;
    };
    interface HTMLIsTabElement extends Components.IsTab, HTMLStencilElement {
    }
    var HTMLIsTabElement: {
        prototype: HTMLIsTabElement;
        new (): HTMLIsTabElement;
    };
    interface HTMLIsTabsElement extends Components.IsTabs, HTMLStencilElement {
    }
    var HTMLIsTabsElement: {
        prototype: HTMLIsTabsElement;
        new (): HTMLIsTabsElement;
    };
    interface HTMLElementTagNameMap {
        "is-alert": HTMLIsAlertElement;
        "is-badge": HTMLIsBadgeElement;
        "is-modal": HTMLIsModalElement;
        "is-multiselect": HTMLIsMultiselectElement;
        "is-pagination": HTMLIsPaginationElement;
        "is-readmore": HTMLIsReadmoreElement;
        "is-tab": HTMLIsTabElement;
        "is-tabs": HTMLIsTabsElement;
    }
}
declare namespace LocalJSX {
    interface IsAlert {
        /**
          * If `true` alert will close automatically.
         */
        "autoClose"?: boolean;
        /**
          * Number of seconds to close alert automatically if autoClose `true`.
         */
        "closeSecs"?: number;
        /**
          * Customized close button text.
         */
        "closeText"?: string;
        /**
          * If closable or not.
         */
        "closeable"?: boolean;
        /**
          * The color options are: `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"error"`, `"light"`, `"info"`, `"white"`, `"black"`, and `"dark"`.
         */
        "color"?: string;
        /**
          * Emitted when the alert is closed.
         */
        "onClosed"?: (event: CustomEvent<any>) => void;
        /**
          * If `true`, make the alert rounded.
         */
        "rounded"?: boolean;
    }
    interface IsBadge {
        /**
          * The color options are: `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"error"`, `"light"`, `"info"`, `"white"`, `"black"`, and `"dark"`.
         */
        "color"?: string;
        /**
          * If `true`, make the badge rounded.
         */
        "rounded"?: boolean;
        /**
          * The text to display in the badge.
         */
        "text"?: string;
    }
    interface IsModal {
        /**
          * The text to display in the cancel button.
         */
        "cancelText"?: string;
        /**
          * If 'true' will show the modal header.
         */
        "modalHeader"?: boolean;
        /**
          * The title to display in the modal.
         */
        "modalTitle"?: string;
        "onCancel"?: (event: CustomEvent<any>) => void;
        "onOk"?: (event: CustomEvent<any>) => void;
        /**
          * The text to display in the save button.
         */
        "saveText"?: string;
        /**
          * If 'true' will make the modal visible.
         */
        "visible"?: boolean;
    }
    interface IsMultiselect {
        /**
          * Enable/disable closing after selecting an option
         */
        "closeOnSelect"?: boolean;
        /**
          * If `true`, the user cannot interact with the select.
         */
        "disabled"?: boolean;
        /**
          * The options list items.
         */
        "items"?: ISelectItem[];
        /**
          * The label when option is selected.
         */
        "labelSelected"?: string;
        /**
          * The label to remove or select.
         */
        "labelTo"?: ILabelTo;
        /**
          * Limit the display of selected options. The rest will be hidden within the limitText string.
         */
        "limit"?: number;
        /**
          * Function that process the message shown when selected elements pass the defined limit.
         */
        "limitText"?: Function;
        /**
          * Maximum selected items can be selected.
         */
        "max"?: number;
        /**
          * Emitted when the selected items has changed.
         */
        "onSelectedChanged"?: (event: CustomEvent<any>) => void;
        /**
          * The text to display when not selected items.
         */
        "placeholder"?: string;
        /**
          * The selected items.
         */
        "selected"?: ISelectItem[];
        /**
          * If `true`, The badges will show selected items.
         */
        "showSelectedBadge"?: boolean;
    }
    interface IsPagination {
        /**
          * The color options are: `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"error"`, `"light"`, `"info"`, `"white"`, `"black"`, and `"dark"`.
         */
        "color"?: string;
        /**
          * Current page number, starting from 1
         */
        "currentPage"?: number | string;
        /**
          * Emitted when the page is changed.
         */
        "onChangePage"?: (event: CustomEvent<any>) => void;
        /**
          * Number of rows per page
         */
        "perPage"?: number | string;
        /**
          * Total number of rows in the dataset
         */
        "totalRows"?: number | string;
    }
    interface IsReadmore {
        /**
          * The options to config toggle text.
         */
        "toggleOptions"?: IToggleOptions;
    }
    interface IsTab {
        /**
          * Indicates if tab is blocked
         */
        "disable"?: boolean;
        /**
          * Indicates if tab is active
         */
        "isactive"?: boolean;
        /**
          * Customized name tab
         */
        "label"?: string;
    }
    interface IsTabs {
    }
    interface IntrinsicElements {
        "is-alert": IsAlert;
        "is-badge": IsBadge;
        "is-modal": IsModal;
        "is-multiselect": IsMultiselect;
        "is-pagination": IsPagination;
        "is-readmore": IsReadmore;
        "is-tab": IsTab;
        "is-tabs": IsTabs;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "is-alert": LocalJSX.IsAlert & JSXBase.HTMLAttributes<HTMLIsAlertElement>;
            "is-badge": LocalJSX.IsBadge & JSXBase.HTMLAttributes<HTMLIsBadgeElement>;
            "is-modal": LocalJSX.IsModal & JSXBase.HTMLAttributes<HTMLIsModalElement>;
            "is-multiselect": LocalJSX.IsMultiselect & JSXBase.HTMLAttributes<HTMLIsMultiselectElement>;
            "is-pagination": LocalJSX.IsPagination & JSXBase.HTMLAttributes<HTMLIsPaginationElement>;
            "is-readmore": LocalJSX.IsReadmore & JSXBase.HTMLAttributes<HTMLIsReadmoreElement>;
            "is-tab": LocalJSX.IsTab & JSXBase.HTMLAttributes<HTMLIsTabElement>;
            "is-tabs": LocalJSX.IsTabs & JSXBase.HTMLAttributes<HTMLIsTabsElement>;
        }
    }
}
