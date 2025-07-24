int ledPin=8;			
int inputPin=7;			
int val=0;			
int count=0;			
boolean visiting = false;			
			
void setup() {			
	pinMode(ledPin, OUTPUT);		
	pinMode(inputPin, INPUT);		
	Serial.begin(9600);		
}			
			
void loop() {			
	val=digitalRead(inputPin);		
	if(val==HIGH){		
		if(visiting == false){  // 최초 감지했을 때(한 3~4초간 또는 머무르면 계속) 에만 카운팅하기 위한 처리	
			visiting = true;
			count = count + 1;
		}	
		digitalWrite(ledPin,HIGH);	
		Serial.println("손님 오심 !!!");	
	} else {		
		visiting = false;	
		digitalWrite(ledPin, LOW);	
		Serial.print("파리 날리는 중~ 지금까지 온 손님:");	
		Serial.println(count);	
	}		
	delay(1000);		
}			