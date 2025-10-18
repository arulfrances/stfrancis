import { AspectRatio, Box, Container, Heading, Text, VStack, Link } from "@chakra-ui/react";
import Layout from "../components/Layout";

export default function About() {
    return (
        <Layout>
            <Container maxW="container.md" py={6}>
                <VStack spacing={6} align="start">
                    <Heading as="h1">About Our Parish</Heading>

                    <Text>
                        St. Francis of Assisi Church was established in 1990 to serve the growing community
                        of Assisi Nagar, Ganapathy, Coimbatore. The church was consecrated on October 9, 1994,
                        and has since been a beacon of faith and charity.
                    </Text>

                    <Text>
                        Our parish is dedicated to St. Francis of Assisi, the patron saint known for his love of nature and service to the poor.
                        We strive to follow his example in our daily lives and church activities.
                    </Text>

                    <Heading as="h2" size="md" pt={4}>ஆலயத்தின் பெயர்</Heading>
                    <Text>புனித பிரான்சிஸ் அசிசியார் ஆலயம்</Text>

                    <Heading as="h2" size="md" pt={4}>இடம்</Heading>
                    <Text>கணபதி, கோயம்பத்தூர்</Text>

                    <Heading as="h2" size="md" pt={4}>முகவரி</Heading>
                    <Text>அசிசி நகர், அத்திபாளையம் பிரிவு, கணபதி, கோயம்பத்தூர் -06</Text>

                    <Heading as="h2" size="md" pt={4}>மாவட்டம்</Heading>
                    <Text>கோயம்பத்தூர்</Text>

                    <Heading as="h2" size="md" pt={4}>மறைமாவட்டம்</Heading>
                    <Text>கோயம்பத்தூர்</Text>

                    <Heading as="h2" size="md" pt={4}>மறைவட்டம்</Heading>
                    <Text>மேட்டுப்பாளையம்</Text>

                    <Text>நிலை: பங்குத்தளம்</Text>
                    <Text>பங்குத்தந்தை: அருட்பணி.‌ விக்டர் பால்ராஜ்</Text>

                    <Text>குடும்பங்கள்: 1500</Text>
                    <Text>அன்பியங்கள்: 50</Text>

                    <Heading as="h2" size="md" pt={4}>வழிபாட்டு நேரங்கள்</Heading>
                    <Text>ஞாயிறு திருப்பலி காலை 06:30 மணி, காலை 08:15 மணி மற்றும் மாலை 05:30 மணி</Text>
                    <Text>திங்கள் முதல் சனி வரை காலை 06:30 மணி திருப்பலி, நவநாள் ஜெபம்</Text>

                    <Text>திருவிழா: அக்டோபர் 3வது வாரம் திருவிழா, கொடியேற்றத்துடன் ஒருவாரம் நவநாள் திருப்பலி</Text>

                    <Heading as="h2" size="md" pt={4}>மண்ணின் இறையழைத்தல்கள்</Heading>
                    <Text>அருட்பணி. டேவிட் அலெக்ஸாண்டர், கோவை மறைமாவட்டம்</Text>
                    <Text>அருட்பணி. சார்லஸ், OFM Cap</Text>
                    <Text>வழித்தடம்: காந்திபுரத்தில் இருந்து 3 கிலோ மீட்டர் தொலைவில் சிவா மருத்துவமனை அருகில், அத்திபாளையம் பிரிவு நிறுத்தம்</Text>

                  <Heading as="h2" size="md" pt={4} mb={2}>
  Location Map
</Heading>
<Text>St. Francis of Assisi Church</Text>

<Box mt={4} borderRadius="md" overflow="hidden" boxShadow="md">
  <AspectRatio ratio={16 / 9} maxW="100%" border="1px solid #ccc" borderRadius="md">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.050612489831!2d77.00470371458692!3d11.016796291876093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859bdfdda095f%3A0x7f214b8f3936f6ff!2sSt.%20Francis%20of%20Assisi%20Church!5e0!3m2!1sen!2sin!4v1697655600000!5m2!1sen!2sin"
      width="600"
      height="450"
      loading="lazy"
      allowFullScreen
      style={{ border: 0 }}
      title="St Francis of Assisi Church Location"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </AspectRatio>
</Box>

                    <Heading as="h2" size="md" pt={4}>வரலாறு</Heading>

                    <Text>20 -ம் நூற்றாண்டின் பிற்பகுதியில் தொழிற்சாலைகள், மென்பொருள் நிறுவனங்கள் மற்றும் பல்வேறு தொழில் வளங்கள் காரணமாக கோவை மாநகரமானது மிக வேகமாக வளர்ந்து வந்தது. கிழக்கில் அவினாசி, பல்லடம், தெற்கில் பொள்ளாச்சி, மேற்கில் மருத்துவா மலை, வடக்கில் மேட்டுப்பாளையம், அன்னூர் வரை கோவையின் வளர்ச்சி பரந்து விரிந்து கிடக்கிறது.‌ ஆகவே நிலங்களின் விலையும் உயர்ந்து கொண்டே வந்தது. இவ்வேளையில் கோவை மறைமாவட்ட ஆயர் மேதகு விசுவாசம் அவர்களின் வழிகாட்டலில் அத்திபாளையம் கணபதி பகுதியில் குடியிருப்புகள் அமைக்கவும், ஆலயம் கட்டவும் நிலம் வாங்கப்பட்டது.‌</Text>

                    <Text>மேதகு ஆயர் அம்புரோஸ் பணிக்காலத்தில் மேலும் கூடுதலாக நிலம் ஆலயத்திற்கு வாங்கப்பட்டது.</Text>

                    <Text>அத்திபாளையம் கணபதி, புனித பிரான்சிஸ் அசிசியார் ஆலயமானது காந்திநகர் பங்கின் கிளைப் பங்காக, கப்புச்சின் சபை குருக்களின் வழிகாட்டலில் செயல்பட்டு வந்தது.</Text>

                    <Text>காந்திபுரம் பங்குதந்தை அருட்பணி.‌ மத்தியாஸ், OFM Cap அவர்களின் பணிக்காலத்தில், மேதகு ஆயர் அம்புரோஸ் அவர்களால் 03.05.1987 அன்று புனித பிரான்சிஸ் அசிசியார் ஆலயம் கட்ட அடிக்கல் நாட்டப்பட்டது.‌</Text>

                    <Text>01.06.1990 அன்று கணபதி, புனித பிரான்சிஸ் அசிசியார் ஆலயம் தனிப் பங்காக உருவானது. விசுவாச புரம் மற்றும் சேரன் மாநகர் ஆகியவை இதன் கிளைப் பங்குகளாயின. அருட்பணி. உபகார மரிய சேவியர் அவர்கள் முதல் பங்குத்தந்தையாக பணிப் பொறுப்பேற்று வழிநடத்தினார். ஆலய கட்டுமானப் பணிகள் நிறைவு பெற்று 09.10.1994 அன்று மேதகு ஆயர் அம்புரோஸ் அவர்களால் அர்ச்சிக்கப்பட்டது.</Text>

                    <Text>மணிக்கூண்டு கட்டப்பட்டு 20.10.1996 அன்று திறந்து வைக்கப்பட்டது.</Text>

                    <Text>இறை மக்களின் எண்ணிக்கை அதிகரித்து வந்ததன் காரணமாக இடநெருக்கடி ஏற்படவே, பங்குதந்தை அருட்பணி.‌ ஜான் பால் வின்சென்ட் அவர்களின் முயற்சி மற்றும் வழிகாட்டலில் மக்களின் ஒத்துழைப்புடன் புதிய ஆலயம் கட்ட தீர்மானிக்கப்பட்டு, பழைய ஆலயமானது அகற்றப்பட்டு, 09.12.2018 அன்று மேதகு ஆயர் தாமஸ் அக்குவினாஸ் அவர்களால் ஆலயத்திற்கு அடிக்கல் நாட்டப்பட்டது.</Text>

                    <Text>ஆலய கட்டுமானப் பணிகளானது 19.03.2019 அன்று தொடங்கியது. பங்குத்தந்தை யின் பங்கு இறைமக்களின் ஒத்துழைப்பு மற்றும் நன்கொடைகளால் ஆலய கட்டுமானப் பணிகள் சிறப்புற நடைபெற்று வருகின்றன.</Text>

                    <Heading as="h2" size="md" pt={4}>பங்கின் பங்கேற்பு அமைப்புகள்:</Heading>

                    <li>கத்தோலிக்க சங்கம்</li>
                    <li>வின்சென்டதேபால்</li>
                    <li>பிரான்சிஸ்கன் 3ஆம் சபை</li>
                    <li>மரியாயின் சேனை</li>
                    <li>சீனியர் மற்றும் ஜூனியர் இளைஞர்கள்</li>
                    <li>பாடகர் குழுக்கள் 3</li>
                    <li>மறைக்கல்வி ஆசிரியர் பெருமக்கள்</li>
                    <li>பங்குப் பேரவை</li>
                    <li>அசிசி முதலுதவி குழு</li>


                    <Heading as="h2" size="md" pt={4}>பங்கில் உள்ள கெபிகள்:</Heading>

                    <li>வேளாங்கண்ணி மாதா</li>
                    <li>குழந்தை இயேசு</li>
                    <li>புனித பிரான்சிஸ் அசிசியார்</li>
                    <li>தகவல்கள் மற்றும் புகைப்படங்கள்: முன்னாள் பங்குத்தந்தை அருட்பணி. ஜான் பால் வின்சென்ட் அவர்கள்.</li>

                    <Heading as="h2" size="md" pt={4}>பங்கில் பணியாற்றிய பங்குத்தந்தையர்கள் பட்டியல்:</Heading>

                    <Text>அருட்பணி. உபகார மரிய சேவியர் (1990-1995)</Text>
                    <Text>அருட்பணி.‌ ஸ்டீபன் ஆரோக்கிய ராஜ் (1995-1999)</Text>
                    <Text>அருட்பணி. ஜோசப் தனராஜ் (1999-2002)</Text>
                    <Text>அருட்பணி.‌ ஜெயபால் (2002-2004)</Text>
                    <Text>அருட்பணி.‌ பால்ராஜ் வின்சென்ட் (2004-2006)</Text>
                    <Text>அருட்பணி.‌ C. S. மதலைமுத்து (2006-2011)</Text>
                    <Text>அருட்பணி.‌ ஜோசப் பிரகாசம் (2011-2016)</Text>
                    <Text>அருட்பணி.‌ ஜான் பால் வின்சென்ட் (2016-2025)</Text>
                    <Text>9 years of Mission with Vision (Pioneer of the New Church)</Text>
                    <Text>அருட்பணி.‌ விக்டர் பால்ராஜ் (2025 – )</Text>
                </VStack>
            </Container>
        </Layout>
    );
}
