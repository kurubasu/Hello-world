'#################################################################################
 @@ hightlight id_;_11404104_;_script infofile_;_ZIP::ssf21.xml_;_
'#################################################################################
'Script Name:TS_001_To verify whether user can able to view “Sign In” button in the home screen once the application gets launched
'Test Case Name: TS_001_To verify whether user can able to view “Sign In” button in the home screen once the application gets launched
'Created On: '03/10/2020
'Created By: Suresh Kuruba
'#################################################################################
'								CHANGE HISTORY
'#################################################################################
'Sl No	|	Change Performed 	|	Change done by	|	Date Changed
'#################################################################################
'
'#################################################################################

TestName=Environment.Value("TestName")
RunAction "Action1 [DriverScript_new]", oneIteration,"DDTF_MobileMolinaStaging",TestName

'Step1: Launch the member Services Application


RunAction "Action1 [LaunchDevice_Generic]", oneIteration

'Step2:Login with valid credentials

wait 10


	if MobiDevice("Molina Healthcare Mobile").MobiButton("SignIn").Exist(10) then
		reporter.ReportEvent micPass,"Checking Sign-In Button","User is able to view the  Sign-In Button"
		Call FN_GEN_Screenshot(TestName)
	else
		reporter.ReportEvent micFail,"Checking Sign-In Button","User is not able to view the  Sign-In Button"
		Call FN_GEN_Screenshot(TestName)
	End If 

 @@ hightlight id_;_11404104_;_script infofile_;_ZIP::ssf91.xml_;_
