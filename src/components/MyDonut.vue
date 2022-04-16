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
                colors : ['#0D8C00','#DE3163'],
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
                            offset: 35,
                            minAngleToShowLabel: 10,
                            
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
                                    fontWeight: 100,
                                    color: '#fff',
                                    offsetY: 15,
                                    
                                    formatter: function (val) {
                                        return val
                                    },
                                    
                                },
                                total: {
                                    show: true,
                                    fontSize: '18px',
                                    fontWeight: 100,
                                    fontFamily: 'Sarabun',
                                    label: 'ทั้งหมด',
                                    color: '#fff',
                                    
                                    
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
                    type: 'solid',
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
                        colors: ['#fff'],
                        fontFamily: 'Sarabun',
                        fontWeight: '100',
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
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 10px 20px;
    transition: 0.25s;
}
.pie::before{
    content: '';
    position:absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba( 255, 255, 255, 0.3 );
    transition: transform 0.5s;
    transform: scaleY(0);
    transform-origin: bottom;
}
.pie:hover::before{
    transition: transform 0.5s;
    transform: scaleY(1);
    transform-origin: bottom;
}
.pie:hover{
    /* background: rgba( 255, 255, 255, 0.4 ); */
}
.pie .title{
    text-align: left;
}
.pie .title span{
    font-size: 0.8em;
    text-align: left;
    font-weight: 300;
    padding: 2px 5px 2px 5px;
    border: 1px solid rgba(255, 255, 255,0.3);
    border-radius: 3px;
    transition: 0.25s;
}  
.pie:hover .title span{
    background: rgba( 255, 255, 255, 0.25 );
    border: 1px solid rgba(255, 255, 255,0.8);
} 
</style>