
'use strict';

const { St, Clutter } = imports.gi;

const Main = imports.ui.main;

let _myText;

class Extension {

    enable() {
    const _myText = new St.Label({ text: '  File        Edit        View        Go        Window        Help', 
    y_align: Clutter.ActorAlign.CENTER, 
    style_class: 'panel-button', 
    track_hover: false, 
    reactive: false, 
    style_class: 'panel-button my-class'});
    Main.panel._leftBox.insert_child_at_index(_myText, 10)
    }

    disable() {
    Main.panel._leftBox.remove_child(_myText);
    _myText.destroy();
    }
}

function init() {
    return new Extension();
}
