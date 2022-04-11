<template>
<div class="pie">
    <div class="title">
        <span>{{ititle}}</span>
    </div>
    
    <apexchart  type="donut" width="230" :options="chartOptions" :series="series"></apexchart>
</div>
  
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
    props: ['series','labels','ititle'],
    data(){
        return {
            items: null,
            arrValue: [44, 55, 41],
            // series: this.list.count,
            chartOptions: {
                colors : ['#009090','#E0787C'],
                chart: {
                    type: 'donut',
                   
                },   
                stroke:{
                    show: false,
                    curve: 'smooth',
                    lineCap: 'round',
                    colors: ['#FFFFFF'],
                    width: 2,
                    dashArray: 0,
                },
                
                labels: this.labels,
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 270,
                        expandOnClick: true,
                        offsetX: 0,
                        offsetY: 0,
                        customScale: 1,
                        dataLabels: {
                            offset: 20,
                            minAngleToShowLabel: 10
                        }, 
                        donut: {
                            size: '70%',
                            background: 'transparent',
                            labels: {
                                show: true,                              
                                value: {
                                    show: true,
                                    fontSize: '20px',
                                    fontFamily: 'Sarabun',
                                    fontWeight: 800,
                                    color: undefined,
                                    offsetY: 16,
                                    formatter: function (val) {
                                        return val
                                    }
                                },
                                total: {
                                    show: true,
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    fontFamily: 'Sarabun',
                                    label: 'ทั้งหมด',
                                    color: '#1976d2',
                                    
                                    
                                }
                            },
                                                 
                        },
                    }
                },
                title: {
                    text: undefined, //this.ititle,
                    style: {
                        fontSize:  '18px',
                        fontFamily: 'Sarabun',
                        color: '#2c3e50',
                    }
                },
                fill: {
                    type: 'gradient',
                },
                dataLabels: {
                    
                    formatter(val, opts) {
                        //  const name = opts.w.globals.labels[opts.seriesIndex]
                        //  return [name, val.toFixed(0)]
                        // return [val.toFixed(0)]
                        return [opts.w.globals.labels[opts.seriesIndex],opts.w.globals.series[opts.seriesIndex]]
                    },
                   
                    style: {
                        fontSize: '14px',
                        colors: ['#000'],
                        fontFamily: 'Sarabun',
                        fontWeight: '600',
                    },
                    // background: {
                    //     enabled: true,
                    //     foreColor: '#fff',
                    //     padding: 4,
                    //     borderRadius: 5,
                    //     borderWidth: 0,
                    //     borderColor: '#fff',
                    //     opacity: 0.5,
                    //     dropShadow: {
                    //         enabled: false,
                    //         top: 1,
                    //         left: 1,
                    //         blur: 1,
                    //         color: '#000',
                    //         opacity: 0.45
                    //     }
                    // },
                    dropShadow: {
                        enabled: false,
                        top: 3,
                        left: 3,
                        blur: 1,
                        color: '#fff',
                        opacity: 0.9
                    }
                },
                legend: {
                    show: false,
                    fontSize: '20px',
                    formatter(val, opts) {
                        return val + " - " + opts.w.globals.series[opts.seriesIndex]
                    },
                    
                },
                responsive: [{
                    breakpoint: 800,
                    options: {
                        chart: {
                            width: 250
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                
            },
        }
    },
    components: {
        'apexchart': VueApexCharts,
    },
    mounted() {        
        // this.arrValue = this.list.count //[1,2,3,4,5]
    }
}
</script>

<style scope>
.pie {
    margin-top: 20px;
}
.pie .title{
    text-align: left;
}
.pie .title span{
    font-size: 0.8em;
    text-align: left;
    font-weight: 600;
    padding: 2px 5px 2px 5px;
    border: 1px solid #000;
    border-radius: 3px;
}   
</style>