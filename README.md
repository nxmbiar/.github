### In this repository, you'll find the following atomics:


#### 1. [TE - Create Agent-To-Server Instant Test](/TE-CreateNetworkInstantTest__definition_workflow_01PA0SYZA23QH2AuC1VUrkF6l1d5hKzSQkB)

Some change to trigger wf Creates and runs a new Network Agent-To-Server Instant test in ThousandEyes.
Documentation: https://developer.thousandeyes.com/v6/instant/#/instant

Steps to use:
1. Setup your ThousandEyes API Target & Account Key
2. Provide inputs to create Network (Agent-to-Server) test
3. If the request is successful, the output of this atomic is the test ID of the instant test created. Response does not include instant test results. Once the instant test is created and ran, results can be retrieved using Test Data endpoints. 
4. If the request is not successful, the output contains the error message

#### 2. [TE - Network Path Visualisation](/TE-NetworkPathVisualisation__definition_workflow_01P9TL04P9X864dEp8yCSXvEcuzPdZSoMDf)

Returns a summary of the path visualization data collected from each agent to the destination. In each path visualization attempt, three attempts are made to reach the destination. Each set of data is summarized, based on response time, number of hops, and response time to the target. A time frame must be specified, or the current round of data will be returned.

Documentation: https://developer.thousandeyes.com/v6/test_data/#/path-vis

Steps to use:
1. Setup your ThousandEyes API Target & Account Key
2. Provide a Test ID, a from & to date in the format YYYY-MM-DDTHH:MM:SS & what fields you'd like to have returned (if no filter criteria is specified, by default all fields/values are returned)
3. If the request is successful, two output variables are made available: (a) a table object (b) a JSON string w/ the path visualisation output
4. If the request is not successful, the output contains the error message

#### 3. [TE - Create SIP Server Instant Test](/TE-CreateSIPInstantTest__definition_workflow_01P9KSGNAP67I2SqSGJ8iZb82MP34bcCpUc)

Creates and runs a new SIP Server Instant test in ThousandEyes.
Documentation: https://developer.thousandeyes.com/v6/instant/#/instant

Steps to use:
1. Setup your ThousandEyes API Target & Account Key
2. Provide inputs to create SIP Server Test
3. If the request is successful, the output of this atomic is the test ID of the instant test created. Response does not include instant test results. Once the instant test is created and ran, results can be retrieved using Test Data endpoints. 
4. If the request is not successful, the output contains the error message

#### 4. [TE - Get End-to-End Endpoint Metrics](/TE-GetE2EEndpointMetrics__definition_workflow_01PARTN8KKXYV5wkWa8qsJtPxcJtLzAkbE5)

Returns network metrics (loss, latency, jitter and bandwidth) from each endpoint agent, for each roundId in the requested window. A time frame must be specified, or the most recent round within last 2 hours will be returned.

Documentation: https://developer.thousandeyes.com/v6/endpoint_test_data/#/endpoint_end-to-end_metrics

Steps to use:
1. Setup your ThousandEyes API Target & Account Key
2. Provide your Test ID, from & to dates in the format YYYY-MM-DDTHH:MM:SS and what fields you'd like to have returned (this is optional - by default, all fields/values are returned)
3. If the request is successful, the output of this atomic is a JSON string with the metrics 

#### 5. [TE - SIP Server Metrics](/TE-SIPServerMetrics__definition_workflow_01P90GVPWL8F16DvqwofSVwGBOQMKWCxeV9)

Returns voice SIP server metrics (response, invite, register time) from each agent, for each roundId in the requested window. A time frame must be specified, or the current round of data will be returned.
Documentation: https://developer.thousandeyes.com/v6/test_data/#/voice-sip-server

Steps to use:
1. Setup your ThousandEyes API Target & Account Key
2. Provide a TestID, From & To Date in the format YYYY-MM-DDTHH:MM:SS, filter criteria/condition & what fields you'd like to have returned (this step is optional - by default, all fields/values are returned)
3. If the request is successful, the output of this atomic is a JSON string w/ rows that match the filter criteria
4. If the request is not successful, the output contains the error message

#### 6. [TE - Instant Test Rerun](/TE-InstantTestRerun__definition_workflow_01P8Z4V1K7OOH37DF10BeSfL3f5JSRFTQKL)

Reruns an existent Instant test in your ThousandEyes account. 
Documentation: https://developer.thousandeyes.com/v6/instant/#/instant-rerun

Steps to use:
1. Setup your ThousandEyes API Target & Account Key
2. Provide your Test ID as Input
3. If the request is successful, the test was run successfully and results can be retrieved using the atomics for retrieving Test Data available on our Git Repo: https://github.com/ciscomanagedservices/sxo-thousandeyes
4. If the request is not successful, the output contains the error message

#### 7. [TE - Endpoint Agent Get Detailed Path Trace](/TE-EndpointAgentGetDetailedPathTrace__definition_workflow_01PARZE1PAOTG2qTw6VsxrqwPju7Urxi0cB)

Returns a hop-by-hop summary of the path trace data collected during path visualization. In each round, one path discovery attempt is made to reach the destination. The entire path is returned. A roundId must be specified.
Documentation: https://developer.thousandeyes.com/v6/endpoint_test_data/#/endpoint_traceroute

Steps to use:
1. Setup your ThousandEyes API Target & Account Key
2. Provide an Endpoint Agent ID, Path ID, Round ID, Test ID, filter criteria/condition & what fields you'd like to have returned (by default, all fields/values are returned)
3. If the request is successful, the output of this atomic is a JSON string w/ rows that match the filter criteria
4. If the request is not successful, the output contains the error message

#### 8. [TE - Endpoint Agent Network Path Visualisation](/TE-EndpointAgentNWPathVis__definition_workflow_01PARNVHLVALO7RQtBimWR4MgGHNpevqzcM)

Returns a summary of the path visualization data collected from each endpoint agent to the destination. In each path visualization attempt, one attempt is made to reach the destination. Each set of data is summarized, based on response time, number of hops, and response time to the target. A time frame must be specified, or the most recent round within last 2 hours will be returned.

Documentation: https://developer.thousandeyes.com/v6/endpoint_test_data/#/endpoint_path-vis

Steps to use:
1. Setup your ThousandEyes API Target & Account Key
2. Provide a Test ID, a from & to date in the format YYYY-MM-DDTHH:MM:SS & what fields you'd like to have returned (if no filter criteria is specified, by default all fields/values are returned)
3. If the request is successful, the output is a JSON string w/ the path visualisation output
4. If the request is not successful, the output contains the error message

#### 9. [TE - Query Agent ID ](/TE-QueryAgentID__definition_workflow_01P9TCQUAG0DD5OYkfuXZ51Fp41xC2mRJi2)

Returns Agent IDs for agents configured in your ThousandEyes account based on an input criteria you specify. 
Documentation: https://developer.thousandeyes.com/v6/agents/#/agents

Steps to use:
1. Setup your ThousandEyes API Target & Account Key
2. Provide Agent Type & Filter Criteria as inputs
3. If the request is successful, output is presented in two formats: (a) as a list of matching agentIDs, (b) as an array of agent objects that can be readily used with other APIs such as when creating a test or an instant test
4. If the request is not successful, the output contains the error message

#### 10. [TE - Get Detailed Network Path Trace](/TE-GetDetailedNWPathTrace__definition_workflow_01PAQU6ZBFLHY1nL2kdW3FMq2ToSHGdfyVR)

Returns a hop-by-hop summary of the path trace data collected during path visualization. In each path visualization attempt, three attempts are made to reach the destination, and the entire path will be shown in sequence. A roundId must be specified. 
Documentation: https://developer.thousandeyes.com/v6/test_data/#/traceroute

Steps to use:
1. Setup your ThousandEyes API Target & Account Key
2. Provide a Test ID, Agent ID, Round ID, Path ID & what fields you'd like to have returned (if no filter criteria is specified, by default all fields/values are returned)
3. If the request is successful, two output variables are made available: (a) a table object (b) a JSON string w/ the detailed path trace
4. If the request is not successful, the output contains the error message

#### 11. [TE - Get Test Details](/TE-GetTestDetails__definition_workflow_01P8WJT3O5873768U3UiQRXscSJNDklot45)

Get test details for a configured test available in your ThousandEyes account. 
Documentation: https://developer.thousandeyes.com/v6/tests/#/test_details

Steps to use:
1. Setup your ThousandEyes API Target & Account Key
2. Provide a Test ID and indicate if you'd like the output in XML or JSON (by default JSON)
3. If the request is successful, the output of this atomic is a JSON/XML object with the test detail returned from ThousandEyes

#### 12. [TE - Get End-to-End Network Metrics](/TE-GetE2ENetworkMetrics__definition_workflow_01P8XWJZ16DLH0RHdFwycXiEGN2UqCkRcsA)

Retrieve end-to-end network metrics for a network test configured with an Enterprise Agent available in your ThousandEyes account. 
Documentation: https://developer.thousandeyes.com/v6/test_data/#/end-to-end_metrics

Steps to use:
1. Setup your ThousandEyes API Target & Account Key
2. Provide your Test ID, from & to dates in the format YYYY-MM-DDTHH:MM:SS and what fields you'd like to have returned (this step is optional - by default, all fields/values are returned)
3. If the request is successful, the output of this atomic is a JSON string with the metrics 

#### 13. [TE - List Tests](/TE-ListTests__definition_workflow_01P64NCSLWBSV7DQX4JFLMdEUnmyzFttPhe)

Retrieve & Filter configured tests available in your ThousandEyes account. 
Documentation: https://developer.thousandeyes.com/v6/tests/#/test_list

Steps to use:
1. Setup your ThousandEyes API Target & Account Key
2. Provide a filter criteria/condition & what fields you'd like to have returned (this step is optional - by default, all fields/values are returned)
3. If the request is successful, the output of this atomic is a JSON string w/ rows that match the filter criteria
4. If the request is not successful, the output contains the error message
