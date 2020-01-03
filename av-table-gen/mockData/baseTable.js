import {
    table_base
} from '../src/schemas/table_generator'
const shortid = require('shortid');
const faker = require('faker');


function createFakeBaseTable() {


    const mockdata = table_base({
        avTableID: shortid.generate(),
        name: null
    });



    return mockdata;

}



function createTableData(count) {
    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties
    let shortid = shortid.generate();

    var mockData = [];
    var i;
    for (i = 0; i < dataCount; i++) {
        text += i + "<br>";
    }
}

function createFakeTableWithAllColOptionsData() {


    const mockColOpts = [{
            isGroup: false,
            colSpan: null,
            colStyle: null,
            colClass: null
        }, {
            isGroup: true, //required
            colSpan: null,
            colStyle: null,
            colClass: null
        },
        {
            isGroup: true,
            colSpan: null,
            colStyle: null,
            colClass: null,
            colChildren: [{ // for nested cols inside colgroup
                colSpan: 2,
                style: null,
                colClass: null
            }]
        }
    ];

    const mockColumns = [ //define the table columns
        {
            title: "Owner",
            field: "peoples",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-peoples",
            formatterParams: {}
        },
        {
            title: "Status",
            field: "status",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-status",
            formatterParams: { showText: true, statusTags: [{ value: "Done", color: 'green', text: "complete" }] }
        },
        {
            title: "Text",
            field: "text",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-text",
            formatterParams: {}
        },
        {
            title: "Date",
            field: "date",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-date",
            formatterParams: {}
        },
        {
            title: "Numbers",
            field: "numbers",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-numbers",
            formatterParams: {}
        },
        {
            title: "Timeline",
            field: "timeline",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-timeline",
            formatterParams: {}
        },
        {
            title: "Tags",
            field: "tags",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-tags",
            formatterParams: {}
        },
        {
            title: "Rating",
            field: "rating",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-rating",
            formatterParams: {}
        },
        {
            title: "World Clock",
            field: "worldClock",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-worldclock",
            formatterParams: {}
        },
        {
            title: "Checkbox",
            field: "checkbox",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-checkbox",
            formatterParams: {}
        },
        {
            title: "Link",
            field: "link",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-link",
            formatterParams: {}
        },
        {
            title: "Log",
            field: "log",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-log",
            formatterParams: {}
        },
        {
            title: "Auto incriment",
            field: "autoInt",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-autoInt",
            formatterParams: {}
        },
        {
            title: "Country",
            field: "countryCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-country",
            formatterParams: {}
        },
        {
            title: "Vote",
            field: "vote",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-vote",
            formatterParams: {}
        },
        {
            title: "Team",
            field: "teamCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-team",
            formatterParams: {}
        }, {
            title: "Location",
            field: "locationCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-location",
            formatterParams: {}
        },
        {
            title: "Week",
            field: "weekCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-week",
            formatterParams: {}
        },
        {
            title: "Progress",
            field: "progressTrack",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-progress",
            formatterParams: {}
        },
        {
            title: "Long Text",
            field: "longTextCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-longtext",
            formatterParams: {}
        },
        {
            title: "Phone",
            field: "phoneCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-phone",
            formatterParams: {}
        },
        {
            title: "Item ID",
            field: "itemIdCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-item-id",
            formatterParams: {}
        },
        {
            title: "Formula",
            field: "formulaCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-formula",
            formatterParams: {}
        },
        {
            title: "Color Picker",
            field: "colorPicker",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-color-picker",
            formatterParams: {}
        },
        {
            title: "Last Updated",
            field: "lastUpdated",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-last-updated",
            formatterParams: {}
        },
        {
            title: "Time Tracking",
            field: "timeTrackingCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-time-tracking",
            formatterParams: {}
        },
        {
            title: "File",
            field: "fileCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-file",
            formatterParams: {}
        }
    ];


    let mockdata = table_base({

        name: "full Fake Table",
        hasCaption: true,
        caption: "All Table Columns",
        hasHead: true,
        headerRows: [],
        headOpts: null,
        columns: mockColumns,
        colOpts: mockColOpts
    });



    return mockdata;



}


export {
    createFakeTableWithAllColOptionsData
}