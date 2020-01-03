<template>
<div class="table-wrapper">



   <hr>
   <!-- {{avTableDef}} -->
   <hr>

   <!-- <av-table v-for="(avTable, index) in avTableDef" :key="avTable.id" @clickedMe="sampleFunction" @focusedMe="hoverFunction">
      -->
      <div class="fixedTable">
       
         <div id="table-scroll" class="table-scroll">
       
   <av-table v-for="(avTable, index) in avTableDef" :key="avTable.id" id="main-table" class="main-table">

      <template v-if="avTable.hasCaption" #tblCaption>
         <av-table-caption :class="[hoveredTable ? 'red' : 'blue']">
            {{avTable.caption}}
         </av-table-caption>
      </template>
      <template v-if="avTable.colOpts" #tblCols>

         <template v-for="(c, index) in avTable.colOpts">

            <av-table-column-group v-if="c.isGroup" :key="c.id">
               <template v-for="(cChild, index) in c.colChildren" :colChildren="cChild" #childCol>
                  <av-table-column :key="cChild.id" />

               </template>
            </av-table-column-group>

            <av-table-column v-else :key="c.id" />

         </template>

      </template>
      <template v-if="avTable.hasHead" #tblHead>
         <av-table-head>
            <av-table-row #rowContent>
               <template v-for="(tblColumns, index) in avTable.columns">

                  <av-table-cell-header :key="index" v-if="tblColumns.type === 'th'" v-bind="tblColumns">
                     {{tblColumns.title}}
                  </av-table-cell-header>

                  <av-table-cell v-else :key="index" v-bind="tblColumns">

                  </av-table-cell>

               </template>
            </av-table-row>
         </av-table-head>
      </template>

      <template v-if="avTable.hasHead" #tblHead>
         <av-table-head>
            <av-table-row #rowContent>
               <template v-for="(tblColumns, index) in avTable.columns">

                  <av-table-cell-header :key="tblColumns.id" v-if="tblColumns.type === 'th'" v-bind="tblColumns">
                     {{tblColumns.title}}
                  </av-table-cell-header>

                  <av-table-cell v-else :key="tblColumns.id" v-bind="tblColumns">

                  </av-table-cell>

               </template>
            </av-table-row>
         </av-table-head>
      </template>

      <template v-if="avTableMData.length >= 1" #tableBody>
         <av-table-body>
            <template v-for="(item, index) in avTableMData">
               <av-table-row :key="index" #rowContent>

                  <template v-for="(column, indexColumn) in avTable.columns">

                     <av-table-cell-header :key="indexColumn" v-if="column.type === 'th'" :cellValue="item[column.field]" :cellIndex="index">

                        <template #tbodyContent>

                           <component :is="column.formatter" :formatterParams="column.formatterParams" :cellValue="item[column.field]" v-bind="column">
                               {{item[column.field]}}

                              <!-- <template :default="slotProps">

                                 {{item[column.field]}}

                                 <!-- <button v-slot:behavior="{on: on, actions : actions}" v-if="column.formatter ==='col-peoples'" v-bind="{ on, actions }">

                           </button> -->
                                 <!-- <highlight-on-hover v-slot:behavior="{on: on, actions : actions}" v-if="column.formatter ==='col-peoples'" v-bind="{ on, actions }"/> 
                              </template> -->
                           </component>
                        </template>

                     </av-table-cell-header>

                     <av-table-cell v-else :key="indexColumn" v-bind="item" :cellValue="item[column.field]" :cellIndex="index">

                        <template #tbodyContent>

                           <component :is="column.formatter" :formatterOptions="column.formatterParams">

                              {{item[column.field]}}
                              {{column.formatter}}
                           </component>

                        </template>

                     </av-table-cell>

                  </template>

               </av-table-row>
            </template>
         </av-table-body>
      </template>

   </av-table>
   </div>
   </div>

   <hr />

</div>
</template>

<script>
import avTable from "@/components/semantic/avTable"
import avTableBody from "@/components/semantic/avTableBody"
import avTableCaption from "@/components/semantic/avTableCaption"
import avTableCellHeader from "@/components/semantic/avTableCellHeader"
import avTableCell from "@/components/semantic/avTableCell"
import avTableColumn from "@/components/semantic/avTableColumn"
import avTableColumnGroup from "@/components/semantic/avTableColumnGroup"
import avTableFoot from "@/components/semantic/avTableFoot"
import avTableHead from "@/components/semantic/avTableHead"
import avTableRow from "@/components/semantic/avTableRow"

// Format components
import formatHolder from "@/components/formatters/v1/formatHolder" // remove likely

import colAutoint from "@/components/formatters/v1/colAutoint"
import colCheckbox from "@/components/formatters/v1/colCheckbox"
import colColorPicker from "@/components/formatters/v1/colColorPicker"
import colCountry from "@/components/formatters/v1/colCountry"
import colDate from "@/components/formatters/v1/colDate"
import colFile from "@/components/formatters/v1/colFile"
import colFormula from "@/components/formatters/v1/colFormula"
import colItemId from "@/components/formatters/v1/colItemId"
import colLastUpdated from "@/components/formatters/v1/colLastUpdated"
import colLink from "@/components/formatters/v1/colLink"
import colLocation from "@/components/formatters/v1/colLocation"
import colLog from "@/components/formatters/v1/colLog"
import colLongtext from "@/components/formatters/v1/colLongtext"
import colNumbers from "@/components/formatters/v1/colNumbers"
import colPeoples from "@/components/formatters/v1/colPeoples"
import colPhone from "@/components/formatters/v1/colPhone"
import colProgress from "@/components/formatters/v1/colProgress"
import colRating from "@/components/formatters/v1/colRating"
import colStatus from "@/components/formatters/v1/colStatus"
import colTags from "@/components/formatters/v1/colTags"
import colTeam from "@/components/formatters/v1/colTeam"
import colText from "@/components/formatters/v1/colText"
import colTimeline from "@/components/formatters/v1/colTimeline"
import colTimeTracking from "@/components/formatters/v1/colTimeTracking"
import colVote from "@/components/formatters/v1/colVote"
import colWeek from "@/components/formatters/v1/colWeek"
import colWorldclock from "@/components/formatters/v1/colWorldclock"
import colEmail from "@/components/formatters/v1/colEmail"



//Behavior components
import HighlightOnHover from "@/components/behaviors/v1/HighlightOnHover"

export default {
   name: 'styledTable',
   props: {
      avTableDef: {
         type: Array,
         default: function () {
            return []
         }
      },
      avTableMData: {
         type: Array,
         default: function () {
            return []
         }
      },
   },

   components: {
      avTable,
      avTableBody,
      avTableCaption,
      avTableCell,
      avTableColumn,
      avTableColumnGroup,
      avTableFoot,
      avTableHead,
      avTableRow,
      avTableCellHeader,
      formatHolder,
      colAutoint,
      colCheckbox,
      colColorPicker,
      colCountry,
      colDate,
      colFile,
      colFormula,
      colItemId,
      colLastUpdated,
      colLink,
      colLocation,
      colLog,
      colLongtext,
      colNumbers,
      colPeoples,
      colPhone,
      colProgress,
      colRating,
      colStatus,
      colTags,
      colTeam,
      colText,
      colTimeline,
      colTimeTracking,
      colVote,
      colWeek,
      colWorldclock,
      HighlightOnHover,
      colEmail

   },
   data() {
      return {
         hoveredTable: false,

         //json for a defining a table
         avTableDefTest: [{
            hasCaption: true,
            caption: "Poster availability",
            colOpts: [{
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
            ],
            hasHead: true,
            headerRows: [{
                  title: "Name",
                  field: "name",
                  formatter: "text"

               },
               {
                  title: "Email",
                  field: "email",
                  formatter: "progress"
               },
               {
                  title: "Rating",
                  field: "rating",
                  formatter: "star"
               },
               {
                  title: "Mobile",
                  field: "mobile",
                  formatter: "phone"
               },
               {
                  title: "Date Of Birth",
                  field: "dob",
                  formatter: "date"
               },
               {
                  title: "Driver",
                  field: "car",
                  formatter: "star"
               }
            ],
            headOpts: [{

            }],
            columns: [ //define the table columns
               {
                  title: "Owner",
                  field: "peoples",
                  type: "td",
                  scope: null,
                  headers: [],
                  rowSpan: null,
                  colSpan: null
               },
               {
                  title: "Name",
                  field: "name",
                  type: "td",
                  scope: null,
                  headers: [],
                  rowSpan: null,
                  colSpan: null
               },
               {
                  title: "Email", // Text tiel of column
                  field: "email", // field name for data
                  type: "th", // type of header row
                  headers: [], // headers if needed
                  rowSpan: null, // span of row
                  colSpan: null, // col span of row
                  formatter: "status", // USE : Used to define column type \/ Accepts : People, Status, Text, Data, Numbers, Timeline, Tags, Ratings, World Clock, Column, Checkbox, Link, Creation Log, Auto Number, Country, Vote, Team, Location, Week, Progress Trackings, Long text, phone, item id, formula, color picker, last updated, time tracking, file, pivot,
                  formatterParams: {} //that should contain an object with additional information for configuring the formatter.
               },
               {
                  title: "Rating",
                  field: "rating",
                  type: "th",
                  headers: [],
                  rowSpan: null,
                  colSpan: null,
                  formatter: "star"
               },
               {
                  title: "Mobile",
                  field: "mobile",
                  type: "th",
                  scope: "col",
                  headers: [],
                  rowSpan: null,
                  colSpan: null,
                  formatter: "phone"
               },
               {
                  title: "Date Of Birth",
                  field: "dob",

                  type: "th",
                  scope: "col",
                  headers: [],
                  rowSpan: null,
                  colSpan: null,
                  formatter: "date"
               },
               {
                  title: "Car",
                  field: "car",

                  type: "th",
                  scope: "col",
                  headers: [],
                  rowSpan: null,
                  colSpan: null,
                  formatter: "input"
               }
            ],
            //data : this.avTableData

         }],
         avTableData: [{
               "peoples": "https://source.unsplash.com/random",
               "name": "Parvez Ansari",
               "email": "ansariparvez@gmai.com",
               "rating": 5,
               "mobile": "9998979695",
               "dob": "9998979695",
               "mobile": "9998979695"
            },
            {
               "peoples": {
                  name: "Parvez Ansari",
                  image: "https://source.unsplash.com/random"
               },
               "name": "Tayyeb Shaikh",
               "email": "tshaikh1981@gmai.com",

               "rating": 55,
               "mobile": "9091929394"
            },
            {
               "peoples": {
                  name: "Parvez Ansari",
                  image: "https://source.unsplash.com/random"
               },
               "name": "Ashfaque Shaikh",
               "email": "ashly786@gmai.com",

               "rating": 125,
               "mobile": "8081828384"
            }
         ]

      }
   },
   methods: {
      sampleFunction() {
         console.log("You have clicked emited from basic.vue")
      },
      hoverFunction() {
         this.hoveredTable = !this.hoveredTable
         console.log("hovered me")
      },
      clickedTCHListener(th) {
         console.log("clicked tch", th)
      },
      focusedTCHListener(th) {
         console.log("focused tch", th)
      },
      clickedTCListener(tc) {
         console.log("clicked tc", tc)
      },
      focusedTCListener(tc) {
         console.log("focused tc", tc)
      }
   }
}
</script>


