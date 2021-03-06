﻿/**
 * @author Interprise Solutions
 */
define([
	'jquery',
	'underscore',
	'backbone',
    'view/common/enum',
	'view/common/global',
	'text!template/pick/checkListGroup.tpl.html',

], function ($, _, Backbone, Enum,
	Global,
    CheckListItemTemplate) {

    var CheckListItemView = Backbone.View.extend({
        _template: _.template(CheckListItemTemplate),

        //tagName: "table",

        events: {
        },

        initialize: function () {
        },

        InitializeChildViews: function () {
        },

        render: function () {
            this.model.set({ ViewID: this.cid });
            return this.$el.html(this._template(this.model.toJSON()));
        },
    });
    return CheckListItemView;
});