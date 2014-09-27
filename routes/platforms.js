var express = require('express');
var router = express.Router();

/* name has to be unique for every object, connections are an array of name */
var storedPlatforms = {
    'platforms':    {
        '8916': null
    },
    '8916': {
        'sku-1': {
                  "coreData": {
                      "msm8916":{
                            "mmssAhb": {
                                "coreSupply": {'vddD':'stdCell1'},
                                "techChar": '45LP',
                                "functionName": '-',
                                "userParameters":{'state':'?','coreID':'?','readBw':'?','writeBw':'?','operatingFreq':'?','active%':'?','idlePowerState':'?'},
                                "funcParameters": ''
                            },
                            "camSS": {
                                "coreSupply": {'vddD':'stdCell1','vddM':'memCell1'},
                                "techChar": '45LP',
                                "functionName": 'getCamssPower_2',
                                "userParameters":['state','coreID','readBw','writeBw','readBwOcmem','writeBwOcmem','platform','sensorTiming','sensorConfig','cppClk','vfeOutRes','vfeUvFormat','cppBurstModeFps','cppSwOverhead','cppOutResVf0','cppOutResVf1','cppOutResEnc','cppUvFormat','csid','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{vddD,vddM,temperature,platform,sensorTiming,sensorConfig,cppClk,vfeOutRes,vfeUvFormat,cppBurstModeFps,cppSwOverhead,cppOutResVf0,cppOutResVf1,cppOutResEnc,cppUvFormat,csid,reportType,deviceDataSetId,genDataSetId}'
                            },
                            "mipiCsi1": {
                                "coreSupply": {'vddD':'stdCell1'},
                                "techChar": '45LP',
                                "functionName": 'getGenericCorePwr_2',
                                "userParameters":['state','coreID','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                            },
                            "mipiCsi1Phy": {
                                "coreSupply": {'vddA':1.2},
                                "techChar": '45LP',
                                "functionName": 'getCsiPhyPower',
                                "userParameters":['state','coreID','readBw','writeBw','dataRate','timerClk','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{vddD,vddA,temperature,frequency,dataRate,timerClk,reportType, modelVersion}'
                            },
                            "mipiCsi2": {
                                "coreSupply": {'vddD':'stdCell1'},
                                "techChar": '45LP',
                                "functionName": '-',
                                "userParameters":['state','coreID','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{technodeDtId, technodeName, genDataSetId, coreId, modulename, stateTimeline, activePower, stateVoltages, stateFreqs, tempScale, reportType,corner,celltype,deviceDist}'
                            },
                            "mipiCsi2Phy": {
                                "coreSupply": {'vddA':1.2},
                                "techChar": '45LP',
                                "functionName": '-',
                                "userParameters":['state','coreID','readBw','writeBw','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{technodeDtId, technodeName, genDataSetId, coreId, modulename, stateTimeline, activePower, stateVoltages, stateFreqs, tempScale, reportType,corner,celltype,deviceDist}'
                            },
                            "ocmem": {
                                "coreSupply": {'vddM':'memCell1'},
                                "techChar": '45LP',
                                "functionName": 'OCMemPower',
                                "userParameters":['state','coreID','freqSysNoc','freqOcNoc','rdBw','wrBw','idleStates','numIdleBanks','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{freq,vddM,rdBw,wrBw,idleStates,numIdleBanks,returnFormat,reportType}'
                            },
                            "oxilli3D": {
                                "coreSupply": {'vddD':'stdCell1','vddM':'memCell1'},
                                "techChar": '28LP',
                                "functionName": 'getGenSingleParamCorePwr',
                                "userParameters":['state','coreID','readBw','writeBw','readBwOcmem','writeBwOcmem','dataInfoId','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{technodeDtId, technodeName, dataInfoId, coreId, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType}'
                            },
                            "mdp5Vlt": {
                                "coreSupply": {'vddD':'stdCell1','vddM':'memCell1'},
                                "techChar": '45LP',
                                "functionName": 'getMDPPower_4',
                                "userParameters":['state','coreID','readBw','writeBw','readBwOcmem','writeBwOcmem','clks','mdpVersion','outputtarget','dspp0','dspp1','apicalen','fbcen','rotatorinput','video0input','video1input','graphic0input','graphic1input','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{vddD,vddM,temperature,clks,mdpVersion,outputtarget,dspp0,dspp1,apicalen,fbcen,rotatorinput,video0input,video1input,graphic0input,graphic1input,reportType,deviceDataSetId,genDataSetId}'
                            },
                            "mipiDsi1": {
                                "coreSupply": {'vddD':'stdCell1'},
                                "techChar": '45LP',
                                "functionName": 'getDSI_CTRLpower',
                                "userParameters":['state','coreID','inputWidth','inputHeight','inputFps','numOfLanes','inputBpp','inputBlankingRatio','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{inputWidth,inputHeight,inputFps,numOfLanes,inputBpp,inputBlankingRatio,vddD,reportType}'
                            },
                            "mipiDsi1Phy": {
                                "coreSupply": {'vddD':'stdCell1', 'dsiVdda1p8':1.8, 'dsiVdda1p2':1.2},
                                "techChar": '45LP',
                                "functionName": 'getDSI_PHYpower_ara',
                                "userParameters":['state','coreID','inputWidth','inputHeight','inputFps','numOfLanes','inputBpp','inputBlankingRatio','toggleRate','regulator','powerType','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{inputWidth,inputHeight,inputFps,numOfLanes,inputBpp,inputBlankingRatio,dsiVdda1p8,dsiVdda1p2,vddD,toggleRate,regulator,powerType,reportType}'
                            },
                            "venusHdCodec": {
                                "coreSupply": {'vddD':'stdCell1'},
                                "techChar": '45LP',
                                "functionName": 'getVenusPower',
                                "userParameters":['state','coreID','readBw','writeBw','readBwOcmem','writeBwOcmem','modelVersion','standard','coreConfig','ipbFrameRatio','bitrate','intraframePcEn','useOcmem','pipeline','twoStageVsp','interlace','complexity','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{vddD,vddM,temperature,operatingFreq,modelVersion,standard,coreConfig,ipbFrameRatio,bitrate,intraframePcEn,useOcmem,pipeline,twoStageVsp,interlace,complexity,reportType,deviceDataSetId,leakageDataSetId,options}'
                            },
                            "imem": {
                                "coreSupply": {'vddM':'memCell1','vddD':'stdCell1'},
                                "techChar": '45LP',
                                "functionName": 'OCMemPower',
                                "userParameters":['state','coreID','readBw','writeBw','idleStates','numIdleBanks','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{freq, vddM, readBw, writeBw, idleStates, numIdleBanks, returnFormat, reportType}'
                            },
                            "systemNoc": {
                                "coreSupply": {'vddD':'stdCell1'},
                                "techChar": '45LP',
                                "functionName": 'FabricCorePower',
                                "userParameters":['state','coreID','masterBw','slaveBw','busWidth','rbw','wbw','slaveLatency','burstLen','asyncM','asyncS','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{freq, vddD, busWidth, masterBw, slaveBw, reportType}'
                            },
                            "audioSS": {
                                "coreSupply": {'vddD':'stdCell1','vddM':'memCell1'},
                                "techChar": '28LP',
                                "functionName": 'getGenericCorePwr_2',
                                "userParameters":['state','coreID','xx','readBw','writeBw','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                            },            
                            "periphNocSpss": {
                                "coreSupply": {'vddD':'stdCell1'},
                                "techChar": '45LP',
                                "functionName": 'FabricCorePower',
                                "userParameters":['state','coreID','masterBw','slaveBw','busWidth','rbw','wbw','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{freq, vddD, busWidth, masterBw, slaveBw, reportType}'
                            },
                            "spssSdcc": {
                                "coreSupply": {'vddD':'stdCell1'},
                                "techChar": '45LP',
                                "functionName": 'SdccPower',
                                "userParameters":['state','coreID','throughput','readBw','writeBw','bitWidth','mode','datafile','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{throughput, bitwidth, mode, datafile, vddD, freq, reportType}'
                            },
                            "appsThinFab": {
                                "coreSupply": {'vddD':'stdCell1'},
                                "techChar": '45LP',
                                "functionName": 'FabricCorePower',
                                "userParameters":['state','coreID','masterBw','slaveBw','busWidth','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{freq, vddD, busWidth, masterBw, slaveBw, reportType}'
                            },
                            "hsddrxEbi1Ch0": {
                                "coreSupply": {'vddD':'stdCell1'},
                                "techChar": '28LP',
                                "functionName": 'Hsddrx28Power',
                                "userParameters":['state','coreID','bw','version','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{freq, vddD, bw, version, reportType}'
                            },
                            "pll0": {
                                "coreSupply": {'srVddA':0.9,'vddD':'stdCell1'},
                                "techChar": '28LP',
                                "functionName": 'getSrPllPower',
                                "userParameters":['state','coreID','orientation','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{freq, srVddA, vddD, reportType, orientation}'
                            },
                            "pll1": {
                                "coreSupply": {'srVddA':0.9,'vddD':'stdCell1'},
                                "techChar": '28LP',
                                "functionName": 'getSrPllPower',
                                "userParameters":['state','coreID','orientation','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{freq, srVddA, vddD, reportType, orientation}'
                            },
                            "pll2": {
                                "coreSupply": {'srVddA':0.9,'vddD':'stdCell1'},
                                "techChar": '28LP',
                                "functionName": 'getSrPllPower',
                                "userParameters":['state','coreID','orientation','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{freq, srVddA, vddD, reportType, orientation}'
                            },
                            "pll3": {
                                "coreSupply": {'srVddA':0.9,'vddD':'stdCell1'},
                                "techChar": '28LP',
                                "functionName": 'getSrPllPower',
                                "userParameters":['state','coreID','orientation','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{freq, srVddA, vddD, reportType, orientation}'
                            },
                            "pll4": {
                                "coreSupply": {'sr2VddA':0.9,'vddD':'stdCell1'},
                                "techChar": '28LP',
                                "functionName": 'getSr2PllPower',
                                "userParameters":['state','coreID','orientation','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{freq, sr2VddA, vddD, reportType, orientation}'
                            },
                            "pll5": {
                                "coreSupply": {'srVddA':0.9,'vddD':'stdCell1'},
                                "techChar": '28LP',
                                "functionName": 'getSrPllPower',
                                "userParameters":['state','coreID','orientation','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{freq, srVddA, vddD, reportType, orientation}'
                            },
                            "pll6": {
                                "coreSupply": {'sr2VddA':0.9,'vddD':'stdCell1'},
                                "techChar": '28LP',
                                "functionName": 'getSr2PllPower',
                                "userParameters":['state','coreID','orientation','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{freq, sr2VddA, vddD, reportType, orientation}'
                            },
                            "pll7": {
                                "coreSupply": {'srVddA':0.9,'vddD':'stdCell1'},
                                "techChar": '28LP',
                                "functionName": 'getSrPllPower',
                                "userParameters":['state','coreID','orientation','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{freq, srVddA, vddD, reportType, orientation}'
                            },
                            "pll9": {
                                "coreSupply": {'sr2VddA':0.9,'vddD':'stdCell1'},
                                "techChar": '28LP',
                                "functionName": 'getSr2PllPower',
                                "userParameters":['state','coreID','orientation','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{freq, sr2VddA, vddD, reportType, orientation}'
                            },
                            "rpm": {
                                "coreSupply": {'vddD':'stdCell1'},
                                "techChar": '28LP',
                                "functionName": '-',
                                "userParameters":['state','coreID','readBw','writeBw','operatingFreq','active%','idlePowerState'],
                                "funcParameters": ''
                            },
                            "rpmMem": {
                                "coreSupply": {'vddM':'memCell1'},
                                "techChar": '28LP',
                                "functionName": 'OCMemPower',
                                "userParameters":['state','coreID','readBw','writeBw','idleStates','numIdleBanks','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{freq, vddM, readBw, writeBw, idleStates, numIdleBanks, returnFormat, reportType}'
                            },
                            "a53SS": {
                                "coreSupply": {'vddCa90':'stdCell2','vddD':'stdCell1'},
                                "techChar": '45LP',
                                "functionName": 'getGenericCorePwr_2',
                                "userParameters":['state','coreID','dataSetID','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                            },
                            "a53L2_512kb": {
                                "coreSupply": {'vddM':'memCell1','vddD':'stdCell1'},
                                "techChar": '28LP',
                                "functionName": 'getGenericCorePwr_2',
                                "userParameters":['state','coreID','readBw','writeBw','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                            },
                            "wlanBtFmPronto": {
                                "coreSupply": {'vddD':'stdCell1','vddM':'memCell1'},
                                "techChar": '28LP',
                                "functionName": 'getGenericCorePwr_2',
                                "userParameters":['state','coreID','readBw','writeBw','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                            },        
                            "dimeplusLpMssTop": {
                                "coreSupply": {'vddD':'stdCell1','vddM':'memCell1'},
                                "techChar": '28LP',
                                "functionName": 'getGenericCorePwr_2',
                                "userParameters":['state','coreID','readBw','writeBw','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                            },
                            "dimeplusLpMssHm": {
                                "coreSupply": {'vddD':'stdCell1','vddM':'memCell1'},
                                "techChar": '28LP',
                                "functionName": 'getGenericCorePwr_2',
                                "userParameters":['state','coreID','readBw','writeBw','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                            },
                            "dimeplusLpMssQ6": {
                                "coreSupply": {'vddD':'stdCell1','vddM':'memCell1'},
                                "techChar": '28LP',
                                "functionName": 'getQDSP6Power',
                                "userParameters":['state','coreID','readBw','writeBw','dspName','coreName','dataInfoID','numThreads','programBalance','cpp','faxi','threadMipsRequired','l2MissRate','l2MissLatency','avgNumInstperPack','mxPowerPct','dmtFactor','l2State:','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{vddD,vddM,corename,temperature,freq,faxi,dspName,dataInfoId,threadMipsRequired,l2MissRate,l2MissLatency,avgNumInstPerPacket,mxPowerPct,dmtFactor,l2State,reportType,deviceDataSetId,genDataSetId}'
                            },
                            "dimeplusLpMssQ6L2": {
                                "coreSupply": {'vddM':'memCell1'},
                                "techChar": '28LP',
                                "functionName": 'getQDSP_L2Power',
                                "userParameters":['state','coreID','readBw','writeBw','coreName','l2Mode','contentRetention','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{coreName, freq, vddM, l2Mode, reportType}'
                            },
                            "dimeplusLpMssCallisto": {
                                "coreSupply": {'vddD':'stdCell1','vddAGpsAdc1p3':1.3},
                                "techChar": '28LP',
                                "functionName": 'getGenericCorePwr_2',
                                "userParameters":['state','coreID','readBw','writeBw','dataSetID','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                            },
                            "configNoc": {
                                "coreSupply": {'vddD':'stdCell1'},
                                "techChar": '45LP',
                                "functionName": 'getConfNocPower',
                                "userParameters":['state','coreID','masterBw','slaveBw','rbw','wbw','qhm','qhs','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{vddD,temperature,freq,state,rbw,wbw,qhm,qhs,reportType,deviceDataSetId,genDataSetId}'
                            },
                            "smmu": {
                                "coreSupply": {'vddD':'stdCell1','vddM':'memCell1'},
                                "techChar": '45LP',
                                "functionName": 'getGenericCorePwr_2',
                                "userParameters":['state','coreID','readBw','writeBw','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                            },            
                            "chipInfrastructureLeakage": {
                                "coreSupply": {'vddD':'stdCell1'},
                                "techChar": '45LP',
                                "functionName": 'getGenericCorePwr_2',
                                "userParameters":['state','coreID','readBw','writeBw','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                            },
                            "clockTree": {
                                "coreSupply": {'vddD':'stdCell1'},
                                "techChar": '28LP',
                                "functionName": 'getGenericCorePwr_2',
                                "userParameters":['state','coreID','dataSetID','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                            },
                            "bbrxAtlas": {
                                "coreSupply": {'lvddA':1.23,'hvddA':1.8},
                                "techChar": '45LP',
                                "functionName": 'getGenericCorePwr_2',
                                "userParameters":['state','coreID','dataSetID','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                            },
                            "comboDac": {
                                "coreSupply": {'comboDacVddA':1.8,'vddM':'memCell1','vddD':'stdCell1','vddPx3':1.8},
                                "techChar": '28LP',
                                "functionName": 'getGenericCorePwr_2',
                                "userParameters":['state','coreID','dataSetID','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                            },
                            "wlanAdcDac": {
                                "coreSupply": {'wlanVddA':1.25,'vddPxWlanDac':1.8},
                                "techChar": '28LP',
                                "functionName": 'getGenericCorePwr_2',
                                "userParameters":['state','coreID','dataSetID','operatingFreq','active%','idlePowerState'],
                                "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                            }
                      },

                      "tombak":{
                          "audioCodecTombak": {
                              "coreSupply": {'cdcPa':1.85,'cdcCp':1.85,'cdcPx':1.8,'cdcRt':1.8,'cdcMb':3.08,'cdcVb':3.7},
                              "techChar": '28LP',
                              "functionName": 'getGenericCorePwr_2',
                              "userParameters":['state','coreID','readBw','writeBw','dataSetID','operatingFreq','active%','idlePowerState'],
                              "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                          }
                      },

                      "ddr2-1gb":{
                          "ddrCh0": {
                              "coreSupply": {'vddEm1':1.8,'vddEm2':1.2,'vddEm3':1.2,'vddEm4':1.2},
                              "techChar": '45LP',
                              "functionName": 'GetDDRPower',
                              "userParameters":['state','coreID','version','readBw','writeBw','avgBurstLength','pageMissRate','hiddenMissRate','memPartName','ctrlName','axiDataWidth','numberOfParts','numberOfChannels','numberOfRanks','DMM','activityDQ','activityCA','memConfig','memDataSetID','ctrlDataSetId','ioDataSetId','interleavingFactor','operatingFreq','active%','idlePowerState'],
                              "funcParameters": '{version, transactions, memPartName, ctrlName, vdd, freq, axiDataWidth, numberOfParts,numberOfChannels, numberOfRanks, DMM, activityDQ, activityCA, memConfig, memDataSetId, ctrlDataSetId, ioDataSetId, reportType}'
                          }
                      },

                      "sensors":{
                          "sensorAccel": {
                              "coreSupply": {'sensorAccelVdd':1.8,'sensorAccelVddio':1.8},
                              "techChar": '45LP',
                              "functionName": '-',
                              "userParameters":['state','coreID','readBw','writeBw','operatingFreq','active%','idlePowerState'],
                              "funcParameters": 'NeedToSeparateOutAnaAndDigPortions'
                          },
                          "sensorCompass": {
                              "coreSupply": {'sensorCompassVdd':1.8,'sensorCompassVddio':1.8},
                              "techChar": '45LP',
                              "functionName": '-',
                              "userParameters":['state','coreID','readBw','writeBw','operatingFreq','active%','idlePowerState'],
                              "funcParameters": 'NeedToSeparateOutAnaAndDigPortions'
                          },
                          "sensorLight": {
                              "coreSupply": {'sensorLight':1.8},
                              "techChar": '45LP',
                              "functionName": '-',
                              "userParameters":['state','coreID','readBw','writeBw','operatingFreq','active%','idlePowerState'],
                              "funcParameters": 'NeedToSeparateOutAnaAndDigPortions'
                          },
                          "sensorAlt": {
                              "coreSupply": {'sensorAltVddA':1.8,'sensorAltVddD':1.8},
                              "techChar": '45LP',
                              "functionName": '-',
                              "userParameters":['state','coreID','readBw','writeBw','operatingFreq','active%','idlePowerState'],
                              "funcParameters": 'NeedToSeparateOutAnaAndDigPortions'
                          },
                          "sensorGyro": {
                              "coreSupply": {'sensorGyroVdd':1.8,'sensorGyroVddio':1.8},
                              "techChar": '45LP',
                              "functionName": '-',
                              "userParameters":['state','coreID','readBw','writeBw','operatingFreq','active%','idlePowerState'],
                              "funcParameters": 'NeedToSeparateOutAnaAndDigPortions'
                          }
                      },

                      "others":{
                          "display": {
                              "coreSupply": {'displayExtVdd':4.2},
                              "techChar": '45LP',
                              "functionName": '-',
                              "userParameters":['state','coreID','readBw','writeBw','operatingFreq','active%','idlePowerState'],
                              "funcParameters": ''
                          },
                          "paCdma": {
                              "coreSupply": {'paCdma':3.7},
                              "techChar": '45LP',
                              "functionName": 'getGenericCorePwr_2',
                              "userParameters":['state','coreID','dataSetID','operatingFreq','active%','idlePowerState'],
                              "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                          }
                      },

                      "pmic8916":{
                          "pmicTestChip": {
                            "S1": {
                              "coreSupply": {'vph':3.7},
                              "techChar": '45LP',
                              "functionName": '-',
                              "userParameters":['state','coreID','inductor'],
                              "funcParameters": ''
                            },
                            "S2": {
                              "coreSupply": {'vph':3.7},
                              "techChar": '45LP',
                              "functionName": '-',
                              "userParameters":['state','coreID','inductor'],
                              "funcParameters": ''
                            }
                          },
                          "pmicChip": {
                              "coreSupply": {'vph':3.7},
                              "techChar": '45LP',
                              "functionName": '-',
                              "userParameters":['state','coreID','smps1','smps2','smps3','smps4','smps5','ldo1','ldo2','ldo3','ldo4','ldo5','ldo6','ldo7','ldo8','ldo9','ldo10','ldo11','ldo12','ldo13','ldo14','ldo15','ldo16','ldo17','ldo18','operatingFreq','active%','idlePowerState'],
                              "funcParameters": ''
                          },
                          "pmicCdn": {
                              "coreSupply": {'vddAx':1.8,'vddDx':1.8},
                              "techChar": '45LP',
                              "functionName": 'getCdnPower',
                              "userParameters":['state','coreID','x0En','nfcEn','wlanEn','gpsEn','cellEn','operatingFreq','active%','idlePowerState'],
                              "funcParameters": '{vddDx,vddAx, vph, x0En,nfcEn,gpsEn,cellEn,wlanEn,reportType}'
                          },
                          "cxo": {
                              "coreSupply": {'pmicXo':1.8},
                              "techChar": '45LP',
                              "functionName": '-',
                              "userParameters":['state','coreID','operatingFreq','active%','idlePowerState'],
                              "funcParameters": ''
                          }
                      },

                      "wtr1605":{
                          "wtr": {
                              "coreSupply": {'gpsVdd1p8':1.8,'wtr1605Vdd1p3':1.23,'wtr1605Vdd2p05':2.05},
                              "techChar": '45LP',
                              "functionName": 'getGenericCorePwr_2',
                              "userParameters":['state','coreID','dataSetID','operatingFreq','active%','idlePowerState'],
                              "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                          }
                      },

                      "wcn3660":{
                          "wcn": {
                              "coreSupply": {'wcn3660Vdd2p9':3.0,'wcn3660Vdd1p3':1.3, 'wcn3660Vdd1p8':1.8,'wcn3660Xo1p8':1.8},
                              "techChar": '28LP',
                              "functionName": 'getGenericCorePwr_2',
                              "userParameters":['state','coreID','dataSetID','operatingFreq','active%','idlePowerState'],
                              "funcParameters": '{technodeDtId, genDataSetId, coreId, modulename, stateTimeline, stateVoltages, stateFreqs, tempScale, reportType, nonCached}'
                          }
                      },           

                      "hcc":{   
                          "battery": {
                              "coreSupply": null,
                              "techChar": null,
                              "functionName": null,
                              "userParameters": {'capacity':null, 'outputVoltage':3.7},
                              "funcParameters": null
                          }
                      },           
                  },

                  "cellVoltages": {
                      "stdCell1":{
                          "cellType": 'stdCell',
                          "vRet": 0.5,
                          "vNom": 1.05,
                          "activeVoltage": '{1.2, 1.075, 0.975}'
                      },

                      "stdCell2":{
                          "cellType": 'stdCell',
                          "vRet": 0.5,
                          "vNom": 1.05,
                          "activeVoltage": '{1.2, 1.075, 0.975}'
                      },

                      "memCell1":{
                          "cellType": 'memCell',
                          "vRet": 0.75,
                          "vNom": 1.05,
                          "activeVoltage": '{1.155, 1.05}'
                      },
                  },

                  "vddToRailMap":{
                      "msm8916":{
                          "vddApc0":{
                              "a53SS_vddCa90":0,
                          },
                          "vddaWlan":{ //wcn card
                              "wlanAdcDac_wlanVddA":0,
                          },
                          "lvddaBbrxChx":{ //msm          
                              "bbrxAtlas_lvddA":0,
                          },
                          "vddaSr2Pll":{
                              "pll9_sr2VddA":0,
                          },
                          "vddaMipiDsi1p8":{
                              "mipiDsi1Phy_dsiVdda1p8":0,
                          },
                          "vddCx":{
                              "appsThinFab_vddD":0,
                              "chipInfrastructureLeakage_vddD":0,
                              "hsddrxEbi1Ch0_vddD":0,
                              "imem_vddD":0,
                              "mdp5Vlt_vddD":0,
                              "mipiCsi1_vddD":0,
                              "mipiCsi2_vddD":0,
                              "mipiDsi1_vddD":0,
                              "mipiDsi1Phy_vddD":0,
                              "mmssAhb_vddD":0,
                              "oxilli3D_vddD":0,
                              "periphNocSpss_vddD":0,
                              "pll0_vddD":0,
                              "pll1_vddD":0,
                              "pll2_vddD":0,
                              "pll3_vddD":0,
                              "pll4_vddD":0,
                              "pll5_vddD":0,
                              "pll6_vddD":0,
                              "pll7_vddD":0,
                              "rpm_vddD":0,
                              "spssSdcc_vddD":0,
                              "systemNoc_vddD":0,
                              "venusHdCodec_vddD":0,
                              "wlanBtFmPronto_vddD":0,
                              "clockTree_vddD":0,
                              "comboDac_vddD":0,
                              "pll9_vddD":0,
                              "configNoc_vddD":0,
                              "camSS_vddD":0,
                              "smmu_vddD":0,
                              "a53L2_512kb_vddD":0,
                              "a53SS_vddD":0,
                              "audioSS_vddD":0,
                          },
                          "vddMx":{ //msm
                              "audioSS_vddM":0,
                              "ocmem_vddM":0,
                              "rpmMem_vddM":0,
                              "dimeplusLpMssHm_vddM":0,
                              "dimeplusLpMssQ6L2_vddM":0,
                              "dimeplusLpMssTop_vddM":0,
                              "comboDac_vddM":0,
                              "mdp5Vlt_vddM":0,
                              "a53L2_512kb_vddM":0,
                              "camSS_vddM":0,
                              "smmu_vddM":0,
                              "oxilli3D_vddM":0,
                          },
                          "hvddaBbrxChx":{  //msm
                              "bbrxAtlas_hvddA":0,
                          },
                          "vddaCombodac":{ //tombak
                              "comboDac_comboDacVddA":0,
                          },
                          "vddPx3":{
                              "comboDac_vddPx3":0,
                              "wlanAdcDac_vddPxWlanDac":0,
                          },
                          "vddaSrPll":{ 
                              "pll0_srVddA":0,
                              "pll1_srVddA":0,
                              "pll2_srVddA":0,
                              "pll3_srVddA":0,
                              "pll5_srVddA":0,
                              "pll7_srVddA":0,
                          },
                          "vddaMipiCsi":{ // cam sensor
                              "mipiCsi1Phy_vddA":0,
                              "mipiCsi2Phy_vddA":0,           
                          },
                          "vddaMipiDsi1p2":{ // display
                              "mipiDsi1Phy_dsiVdda1p2":0,
                          },
                          "vddMss":{ //msms
                              "dimeplusLpMssTop_vddD":0,
                              "dimeplusLpMssCallisto_vddD":0,
                              "dimeplusLpMssHm_vddD":0,
                              "dimeplusLpMssQ6_vddD":0,
                          },
                          "vddAGpsAdc1p3":{
                              "dimeplusLpMssCallisto_vddAGpsAdc1p3":0,
                          },           
                      },
                      
                      "sensors":{
                          "sensorAccelVdd":{ //sensor
                              "sensorAccel_sensorAccelVdd":0,
                          },
                          "sensorAccelVddio":{ //msm
                              "sensorAccel_sensorAccelVddio":0,
                          },
                          "sensorAltVddd":{
                              "sensorAlt_sensorAltVddD":0,
                          },
                          "sensorAltVddio":{
                              "sensorAlt_sensorAltVddA":0,
                          },
                          "sensorCompassVdd":{
                              "sensorCompass_sensorCompassVdd":0,
                          },
                          "sensorCompassVddio":{
                              "sensorCompass_sensorCompassVddio":0,
                          },
                          "sensorGyroVdd":{
                              "sensorGyro_sensorGyroVdd":0,
                          },
                          "sensorGyroVddio":{
                              "sensorGyro_sensorGyroVddio":0,
                          },
                          "sensorLight":{
                              "sensorLight_sensorLight":0,
                          },
                      },

                      "wtr1605":{
                          "wtr1605GpsVdd1p8":{
                              "wtr_gpsVdd1p8":0,
                          },
                          "wtr1605Vdd1p3":{
                              "wtr_wtr1605Vdd1p3":0,
                          },
                          "wtr1605Vdd2p05":{
                              "wtr_wtr1605Vdd2p05":0,
                          },          
                      },
                      
                      "wcn3660":{
                          "wcn3660Vdd1p3":{ //msm
                              "wcn_wcn3660Vdd1p3":0,
                          },
                          "wcn3660Vdd1p8":{ //msm
                              "wcn_wcn3660Vdd1p8":0,
                          },
                          "wcn3660Vdd2p9":{ //msm
                              "wcn_wcn3660Vdd2p9":0,
                          },
                          "wcn3660Xo1p8":{ //wcn card
                              "wcn_wcn3660Xo1p8":0,
                          },        
                      },

                      "ddr2-1gb":{
                          "memLpddr0Vdd1":{ //ddr
                              "ddrCh0_vddEm1":0,
                          },
                          "memLpddr0VddqVddca":{ // ddr
                              "ddrCh0_vddEm2":0,
                              "ddrCh0_vddEm4":0,
                          },
                          "vddPx1":{ //msm
                              "ddrCh0_vddEm3":0,
                          },
                      },

                      "tombak":{
                          "tombakVddPa":{
                              "audioCodecTombak_cdcPa":0,
                          },
                          "tombakVddCp":{
                              "audioCodecTombak_cdcCp":0,
                          },
                          "tombakVddPx":{
                              "audioCodecTombak_cdcPx":0,
                          },
                          "tombakVddRt":{
                              "audioCodecTombak_cdcRt":0,
                          },
                          "tombakVddMb":{
                              "audioCodecTombak_cdcMb":0,
                          },
                          "tombakVddVb":{
                              "audioCodecTombak_cdcVb":0,
                          },
                      },
                      
                      "pmic8916":{
                          "pmicAxClk":{ //pmic
                              "pmicCdn_vddAx":0,
                          },          
                          "vVph":{ // battery               
                              "pmicChip_vph":0,
                          },          
                          "pmicDxClk":{
                              "pmicCdn_vddDx":0,
                          },
                          "pmicXo":{
                              "cxo_pmicXo":0, 
                          },     
                      }, 

                      "others":{
                          "display":{
                              "display_displayExtVdd":0,
                          },
                          "cdmaPa":{     //vph
                              "paCdma_paCdma":0,
                          },              
                      },

                      "hcc": {},
                  },

                  "pdn": {
                    'connection-1':{
                        'hcc':'pmic8916',
                        'properties':{ 'vBatt':['vVph']}
                    },
                    'connection-2':{
                        'hcc':'others',
                        'properties':{'vBatt':['display', 'cdmaPa']} 
                    },
                    'connection-3':{
                        'pmic8916':'msm8916',
                        'properties':{'smps1': ['vddCx','vddMss'], 'smps2': ['vddApc0'], 'smps3': ['lvddaBbrxChx', 'vddaWlan', 'vddAGpsAdc1p3'], 
                                          'ldo2': ['vddaMipiCsi', 'vddaMipiDsi1p2'], 'ldo3': ['vddMx', 'vddaSrPll'], 'ldo5': ['vddPx3'], 'ldo6':['vddaMipiDsi1p8'],
                                          'ldo7':['hvddaBbrxChx', 'vddaCombodac', 'vddaSr2Pll'] }
                    },
                    'connection-4': {
                       'pmic8916':'ddr2-1gb',
                       'properties': {'ldo2': ['memLpddr0VddqVddca', 'memLpddr0Vdd2'], 'ldo5': ['memLpddr0Vdd1']}
                    },
                    'connection-5': {
                       'pmic8916':'tombak',
                       'properties': {'smps4': ['tombakVddCp', 'tombakVddPa'], 'ldo5': ['tombakVddPx', 'tombakVddRt'], 'ldo13': ['tombakVddMb'], 'vBatt': ['tombakVddVb']}
                    },
                    'connection-6': {
                       'pmic8916':'wtr1605',
                       'properties': {'ldo1': ['wtr1605Vdd1p3'], 'ldo4': ['wtr1605Vdd2p05'], 'ldo7':['wtr1605GpsVdd1p8']} 
                    },
                    'connection-7': {
                       'pmic8916':'wcn3660',
                       'properties': {'smps3': ['wcn3660Vdd1p3'], 'ldo5': ['wcn3660Vdd1p8'], 'ldo7':['wcn3660Xo1p8'], 'ldo9': ['wcn3660Vdd2p9']}
                    },
                    'connection-8': {
                       'pmic8916':'sensors',
                       'properties': {'ldo6': ['sensorAccelVddio', 'sensorAltVddio', 'sensorCompassVddio', 'sensorGyroVddio'],
                                            'ldo17': ['sensorAccelVdd', 'sensorAltVddd', 'sensorCompassVdd', 'sensorGyroVdd', 'sensorLight']}
                    },
                    'connection-9': {
                       'pmic8916':'pmic8916',
                       'sub-regulation': { 'smps3': ['ldo1', 'ldo2', 'ldo3'], 
                                                 'smps4': ['ldo4', 'ldo5', 'ldo6', 'ldo7', 'vregRfClk', 'vregXo'] },
                       'properties': {'ldo7': ['pmicDxClk'], 'vregRfClk': ['pmicAxClk'], 'vregXo':['pmicXo']    }
                    }
                  },

                  "useCase": {
                    "audioTM" : {
                        "msm8916":{
                            "mmssAhb" : {
                                //no utilisation
                                "state":"retention",
                                "coreID":501,
                                "readBw":0,
                                "writeBw":0,
                                "operatingFreq":80,
                                "active%":0,
                                "idlePowerState" : "retention"            
                            },
                            "camSS" : {
                                "state":"HS",
                                "coreID":650 ,
                                "readBw":0,
                                "writeBw":0,
                                "readBwOcmem":0,
                                "writeBwOcmem":0,
                                "platform":0,
                                "sensorTiming":0,
                                "sensorConfig":0,
                                "cppClk":0,
                                "vfeOutRes":0,
                                "vfeUvFormat":0,
                                "cppBurstModeFps":0,
                                "cppSwOverhead":0,
                                "cppOutResVf0":0,
                                "cppOutResVf1":0,
                                "cppOutResEnc":0,
                                "cppUvFormat":0,
                                "csid":0,
                                "operatingFreq":320,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "mipiCsi1":{
                                "state":"HS",
                                "coreID":505,
                                "operatingFreq":200,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "mipiCsi1Phy":{
                                "state":"HS",
                                "coreID":506,  
                                "readBw":0,
                                "writeBw":0,          
                                "dataRate":0,
                                "timerClk":0,
                                "operatingFreq":200,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "mipiCsi2":{
                                "state":"HS",
                                "coreID":505,
                                "operatingFreq":200,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "mipiCsi2Phy":{
                                "state":"HS",
                                "coreID":506,
                                "readBw":0,
                                "writeBw":0,
                                "operatingFreq":200,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "ocmem":{
                                "state":"HS",
                                "coreID":514,
                                "freqSysNoc":19.20,
                                "freqOcNoc":100.00,
                                "rdBw":0,
                                "wrBw":0,
                                "idleStates":0,
                                "numIdleBanks":0,
                                "operatingFreq":300,            
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "oxilli3D":{
                                "state":"HS",
                                "coreID":604,
                                "readBw":0,
                                "writeBw":0,
                                "readBwOcmem":0,
                                "writeBwOcmem":0,
                                "dataInfoId":0,
                                "operatingFreq":300,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "mdp5Vlt":{
                                "state":"HS",
                                "coreID":517,
                                "readBw":0,
                                "writeBw":0,
                                "readBwOcmem":0,
                                "writeBwOcmem":0,
                                "clks":"{,19.2}",
                                "mdpVersion":"{'Frodo',1}",
                                "outputtarget":0,
                                "dspp0":0,
                                "dspp1":0,
                                "apicalen":0,
                                "fbcen":0,
                                "rotatorinput":0,
                                "video0input":0,
                                "video1input":0,
                                "graphic0input":0,
                                "graphic1input":0,
                                "operatingFreq":267,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "mipiDsi1":{
                                "state":"HS",
                                "coreID":518,
                                "inputWidth":1280,
                                "inputHeight":720,
                                "inputFps":60,
                                "numOfLanes":4,
                                "inputBpp":24,
                                "inputBlankingRatio":0.15,
                                "operatingFreq":308.51,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "mipiDsi1Phy":{
                                "state":"HS",
                                "coreID":519,
                                "inputWidth":0,
                                "inputHeight":0,
                                "inputFps":0,
                                "numOfLanes":0,
                                "inputBpp":0,
                                "inputBlankingRatio":0,
                                "toggleRate":0,
                                "regulator":0,
                                "powerType":0,
                                "operatingFreq":69.8,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "venusHdCodec":{
                                "state":"HS",
                                "coreID":526,
                                "readBw":0,
                                "writeBw":0,
                                "readBwOcmem":0,
                                "writeBwOcmem":0,
                                "modelVersion":0,
                                "standard":0,
                                "coreConfig":0,
                                "ipbFrameRatio":0,
                                "bitrate":0,
                                "intraframePcEn":0,
                                "useOcmem":0,
                                "pipeline":0,
                                "twoStageVsp":0,
                                "interlace":0,
                                "complexity":0,
                                "operatingFreq":160,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "imem":{
                                "state":"retention",
                                "coreID":527,
                                "readBw":0,
                                "writeBw":0,
                                "idleStates":"{0}",
                                "numIdleBanks":0,
                                "operatingFreq":200,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "systemNoc":{
                                "state":"active",
                                "coreID":528,
                                "masterBw":"{0.2,0.02}",
                                "slaveBw":"{0.42}",
                                "busWidth":8,
                                "rbw":0.22,
                                "wbw":0.20,
                                "slaveLatency":40,
                                "burstLen":4,
                                "asyncM":2,
                                "asyncS":2,
                                "operatingFreq":19.2,
                                "active%":100,
                                "idlePowerState" : "retention"
                            },
                            "audioSS":{
                                "state":"active",
                                "coreID":529,
                                "xx":914,
                                "readBw":0.2,
                                "writeBw":0.2,
                                "operatingFreq":9.6,
                                "active%":100,
                                "idlePowerState" : "retention"
                            },
                            "periphNocSpss":{
                                "state":"active",
                                "coreID":532,
                                "masterBw":"{0.4, 0.02}",
                                "slaveBw":"{0.42}",
                                "busWidth":8,
                                "rbw":0.22,
                                "wbw":0.20,
                                "operatingFreq":19.2,
                                "active%":100,
                                "idlePowerState" : "retention"
                            },
                            "spssSdcc":{
                                "state":"active",
                                "coreID":533,
                                "throughput":0.13,
                                "readBw":0.02,
                                "writeBw":0,
                                "bitWidth":8,
                                "mode":"SPS",
                                "datafile":0,
                                "operatingFreq":20,
                                "active%":10,
                                "idlePowerState" : "retention"
                            },
                            "appsThinFab":{
                                "state":"active",
                                "coreID":534,
                                "masterBw":"{0.4, 1.91}",
                                "slaveBw":"{1.93}",
                                "busWidth":8,
                                "operatingFreq":19.2,
                                "active%":100,
                                "idlePowerState" : "retention"
                            },
                            "hsddrxEbi1Ch0":{
                                "state":"active",
                                "coreID":535,
                                "bw":1.929,
                                "version":0,
                                "operatingFreq":19.2,
                                "active%":100,
                                "idlePowerState" : "retention"
                            },
                            "pll0":{
                                "state":"retention",
                                "coreID":580,
                                "orientation":0,
                                "operatingFreq":800,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "pll1":{
                                "state":"active",
                                "coreID":580,
                                "orientation":0,
                                "operatingFreq":903,
                                "active%":100,
                                "idlePowerState" : "retention"
                            },
                            "pll2":{
                                "state":"retention",
                                "coreID":580,
                                "orientation":0,
                                "operatingFreq":930,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "pll3":{
                                "state":"retention",
                                "coreID":580,
                                "orientation":0,
                                "operatingFreq":1066,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "pll4":{
                                "state":"retention",
                                "coreID":581,
                                "orientation":0,
                                "operatingFreq":960,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "pll5":{
                                "state":"retention",
                                "coreID":580,
                                "orientation":0,
                                "operatingFreq":998.4,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "pll6":{
                                "state":"active",
                                "coreID":581,
                                "orientation":0,
                                "operatingFreq":1152,
                                "active%":100,
                                "idlePowerState" : "retention"
                            },
                            "pll7":{
                                "state":"retention",
                                "coreID":580,
                                "orientation":0,
                                "operatingFreq":691.2,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "pll9":{
                                "state":"retention",
                                "coreID":580,
                                "orientation":0,
                                "operatingFreq":1000,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "rpm":{
                                "state":"retention",
                                "coreID":553,
                                "readBw":0,
                                "writeBw":0,
                                "operatingFreq":178,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "rpmMem":{
                                "state":"idle",     //can be SWCG also
                                "coreID":554,
                                "readBw":0,
                                "writeBw":0,
                                "idleStates":"{0}",
                                "numIdleBanks":0,
                                "operatingFreq":178,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "a53SS":{
                                "state":"HS",
                                "coreID":823,
                                "readBw":0,
                                "writeBw":0,
                                "operatingFreq":800,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "a53L2_512kb":{
                                "state":"HS",
                                "coreID":820,
                                "readBw":0,
                                "writeBw":0,
                                "operatingFreq":400,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "wlanBtFmPronto":{
                                "state":"HS",
                                "coreID":560,
                                "readBw":0,
                                "writeBw":0,
                                "operatingFreq":240,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "dimeplusLpMssTop":{
                                "state":"HS",
                                "coreID":561,
                                "readBw":0,
                                "writeBw":0,
                                "operatingFreq":200,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "dimeplusLpMssHm":{
                                "state":"HS",
                                "coreID":562,
                                "readBw":0,
                                "writeBw":0,
                                "operatingFreq":200,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "dimeplusLpMssQ6":{
                                "state":"active",
                                "coreID":564,
                                "readBw":0.964760192,
                                "writeBw":0.547973621,
                                "dspName":"qDSP6_V5-D_28nmLP",
                                "coreName":"Dime_MSS_Q6",
                                "dataInfoID":2357,   //data info ID added here
                                "numThreads":3,
                                "programBalance":0.63,
                                "cpp":1.25,
                                "faxi":19.2,
                                "threadMipsRequired":"{11.6, 3.8, 0.168}",
                                "l2MissRate":0.01,
                                "l2MissLatency":40,
                                "avgNumInstperPack":2.8,
                                "mxPowerPct":8,
                                "dmtFactor":0,
                                "l2State:":0,
                                "operatingFreq":144,
                                "active%":100,
                                "idlePowerState" : "retention"
                            },
                            "dimeplusLpMssQ6L2":{
                                "state":"active",
                                "coreID":565,
                                "readBw":0,
                                "writeBw":0,
                                "coreName":"qDSP6_V4M_28nm",
                                "l2Mode":"active",            
                                "contentRetention":1,
                                "operatingFreq":600,
                                "active%":100,
                                "idlePowerState" : "retention"
                            },
                            "dimeplusLpMssCallisto":{
                                "state":"HS",
                                "coreID":566,
                                "readBw":0,
                                "writeBw":0,
                                "dataSetID":914,     //added data set ID info
                                "operatingFreq":100,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },            
                            "configNoc":{
                                "state":"retention",
                                "coreID":601,
                                "masterBw":0,
                                "slaveBw":0,
                                "state":0,
                                "rbw":0,
                                "wbw":0,
                                "qhm":0,
                                "qhs":0,
                                "operatingFreq":133,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "smmu":{
                                "state":"active",
                                "coreID":652,
                                "readBw":0,
                                "writeBw":0,
                                "operatingFreq":19.2,
                                "active%":45.45,
                                "idlePowerState" : "retention"
                            },
                            "chipInfrastructureLeakage":{
                                "state":"idle",      //can be SWCG also
                                "coreID":575,
                                "readBw":0,
                                "writeBw":0,
                                "operatingFreq":100,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },            
                            "clockTree":{
                                "state":"HS",
                                "coreID":596,
                                "dataSetID":1560,
                                "operatingFreq":50,
                                "active%":50,
                                "idlePowerState" : "retention"
                            },
                            "bbrxAtlas":{
                                "state":"HS",
                                "coreID":594,
                                "dataSetID":1481,   //added data set ID here
                                "operatingFreq":20,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "comboDac":{
                                "state":"HS",
                                "coreID":592,
                                "dataSetID":7929,    //added data set ID here
                                "operatingFreq":110,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "wlanAdcDac":{
                                "state":"HS",
                                "coreID":"600",
                                "dataSetID":3040,    //aaded data set ID here
                                "operatingFreq":110,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                        },

                        "tombak":{
                            "audioCodecTombak":{
                                "state":"active",
                                "coreID":651,
                                "readBw":0,
                                "writeBw":0,
                                "dataSetID":8044,       //added data set ID for this one. Recheck
                                "operatingFreq":83,
                                "active%":100,
                                "idlePowerState" : "retention"
                            },
                        },

                        "ddr2-1gb":{
                            "ddrCh0":{
                                "state":"active",
                                "coreID":537,
                                "version":"1.2.3",
                                "readBw":1.181,
                                "writeBw":0.75,
                                "avgBurstLength":8,
                                "pageMissRate":0.2,
                                "hiddenMissRate":0.2,
                                "memPartName":"Samsung_4Gb_LPDDR3_NOM_7_9_2012",
                                "ctrlName":"BIMC_8974_LPDDR3",
                                "axiDataWidth":64,
                                "numberOfParts":1,
                                "numberOfChannels":1,
                                "numberOfRanks":2,
                                "DMM":"off",
                                "activityDQ":0.3,
                                "activityCA":0.3,
                                "memConfig":"pop",
                                "memDataSetID":1010,     //added data set ID for external DDR
                                "ctrlDataSetId":0,
                                "ioDataSetId":0,
                                "interleavingFactor":1,
                                "operatingFreq":19.2,
                                "active%":100,
                                "idlePowerState" : "retention"
                            },
                        },

                        "sensors":{            
                            "sensorAccel":{
                                "state":"HS",
                                "coreID":569,
                                "readBw":0,
                                "writeBw":0,
                                "operatingFreq":20,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "sensorCompass":{
                                "state":"HS",
                                "coreID":570,
                                "operatingFreq":20,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "sensorLight":{
                                "state":"HS",
                                "coreID":571,
                                "operatingFreq":20,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "sensorAlt":{
                                "state":"HS",
                                "coreID":572,
                                "operatingFreq":20,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "sensorGyro":{
                                "state":"HS",
                                "coreID":573,
                                "operatingFreq":20,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                        },

                        "others":{            
                            "display":{
                                "state":"HS",
                                "coreID":575,
                                "readBw":0,
                                "writeBw":0,
                                "operatingFreq":100,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                            "paCdma":{
                                "state":"HS",
                                "coreID":586,
                                "dataSetID":914,    //aaded data set ID here
                                "operatingFreq":20,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                        },

                        "pmic8916":{
                            "pmicChip":{
                                "state":"active",
                                "coreID":576,
                                "smps1":{"autoPfmRipple_mV":15,"AutoPfmOffset_%":0.5,"mode":"PWM_PS_ON"},
                                "smps2":{"autoPfmRipple_mV":15,"AutoPfmOffset_%":0.5,"mode":"PWM_PS_ON"},
                                "smps3":{"autoPfmRipple_mV":25,"AutoPfmOffset_%":0.5,"mode":"PWM_PS_ON"},
                                "smps4":{"autoPfmRipple_mV":25,"AutoPfmOffset_%":0.5,"mode":"PWM_PS_ON"},
                                "smps5":{"autoPfmRipple_mV":25,"AutoPfmOffset_%":0.5,"mode":"PWM_PS_ON"},
                                "operatingFreq":100,
                                "active%":100,
                                "idlePowerState" : "retention"
                            },
                            "pmicCdn":{
                                "state":"active",
                                "coreID":588,
                                "x0En":1,
                                "nfcEn":0,
                                "wlanEn":0,
                                "gpsEn":0,
                                "cellEn":0,
                                "operatingFreq":20,
                                "active%":100,
                                "idlePowerState" : "retention"
                            },
                            "cxo":{
                                "state":"HS",
                                "coreID":579,
                                "operatingFreq":20,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                        },

                        "wtr1605":{
                            "wtr1605":{
                                "state":"HS",
                                "coreID":590,
                                "dataSetID":1657,    //added data set ID here
                                "operatingFreq":1900,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                        },
                        
                        "wcn3660":{            
                            "wcn3660":{
                                "state":"HS",
                                "coreID":599,
                                "dataSetID":3040,    //aaded data set ID here
                                "operatingFreq":110,
                                "active%":0,
                                "idlePowerState" : "retention"
                            },
                        },            
                    }
                  }  
              }
          }
      };
var savedPlatforms = {};
router.get('/', function(req, res) {
    // Needs to come from database
    var response;
    response = storedPlatforms[req.query.id];

    console.log('Route:', JSON.stringify(req.route));
    console.log('Params:', JSON.stringify(req.params));
    console.log('Query:', JSON.stringify(req.query));
    console.log('Body:', JSON.stringify(req.body));
    console.log(JSON.stringify(response));

    res.json(response);
});

router.post('/', function(req, res) {
    var response;
    if(req.headers['x-paas-uid'])
        response = {'status': 'success'};
    else
        response = {'status': 'failure'};

    console.log('Route:', JSON.stringify(req.route));
    console.log('Params:', JSON.stringify(req.params));
    console.log('Query:', JSON.stringify(req.query));
    console.log('Body:', JSON.stringify(req.body));
    console.log(JSON.stringify(response));

    res.json(response);
});

    
module.exports = router;
