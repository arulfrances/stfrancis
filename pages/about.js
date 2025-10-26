import React from "react";
import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Divider,
} from "@chakra-ui/react";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box textAlign="center">
          <Heading
            as="h1"
            size="2xl"
            mb={4}
            lineHeight="1.3"
            bgGradient="linear(to-r, #3b82f6, #6366f1)"
            bgClip="text"
          >
            About Our Parish
          </Heading>
        </Box>

        {/* English Content */}
        <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
          <Text fontSize="lg" mb={4} color="gray.700">
            St. Francis of Assisi Church was established in 1990 to serve the
            growing community of Assisi Nagar, Ganapathy, Coimbatore. The
            church was consecrated on October 9, 1994, and has since been a
            beacon of faith and charity.
          </Text>
          <Text fontSize="lg" color="gray.700">
            Our parish is dedicated to St. Francis of Assisi, the patron saint
            known for his love of nature and service to the poor. We strive to
            follow his example in our daily lives and church activities.
          </Text>
        </Box>

        {/* Tamil Content */}
        <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
          <VStack align="start" spacing={3}>
            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              ஆலயத்தின் பெயர்
            </Text>
            <Text fontSize="md" color="gray.700">
              புனித பிரான்சிஸ் அசிசியார் ஆலயம்
            </Text>

            <Divider my={2} />

            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              இடம்
            </Text>
            <Text fontSize="md" color="gray.700">
              கணபதி, கோயம்பத்தூர்
            </Text>

            <Divider my={2} />

            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              முகவரி
            </Text>
            <Text fontSize="md" color="gray.700">
              அசிசி நகர், அத்திபாளையம் பிரிவு, கணபதி, கோயம்பத்தூர் -06
            </Text>

            <Divider my={2} />

            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              மாவட்டம்
            </Text>
            <Text fontSize="md" color="gray.700">
              கோயம்பத்தூர்
            </Text>

            <Divider my={2} />

            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              மறைமாவட்டம்
            </Text>
            <Text fontSize="md" color="gray.700">
              கோயம்பத்தூர்
            </Text>

            <Divider my={2} />

            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              மறைவட்டம்
            </Text>
            <Text fontSize="md" color="gray.700">
              மேட்டுப்பாளையம்
            </Text>

            <Divider my={2} />

            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              நிலை: பங்குத்தளம்
            </Text>

            <Divider my={2} />

            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              பங்குத்தந்தை
            </Text>
            <Text fontSize="md" color="gray.700">
              அருட்பணி. விக்டர் பால்ராஜ்
            </Text>

            <Divider my={2} />

            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              குடும்பங்கள்
            </Text>
            <Text fontSize="md" color="gray.700">
              1500
            </Text>

            <Divider my={2} />

            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              அன்பியங்கள்
            </Text>
            <Text fontSize="md" color="gray.700">
              50
            </Text>
          </VStack>
        </Box>

        {/* Worship Timings in Tamil */}
        <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
          <Heading as="h3" size="lg" mb={4} color="gray.800">
            வழிபாட்டு நேரங்கள்
          </Heading>
          <VStack align="start" spacing={2}>
            <Text fontSize="md" color="gray.700">
              • ஞாயிறு திருப்பலி காலை 06:30 மணி, காலை 08:15 மணி மற்றும் மாலை
              05:30 மணி
            </Text>
            <Text fontSize="md" color="gray.700">
              • திங்கள் முதல் சனி வரை காலை 06:30 மணி திருப்பலி, நவநாள் ஜெபம்
            </Text>
            <Text fontSize="md" color="gray.700">
              • திருவிழா: அக்டோபர் 3வது வாரம் திருவிழா, கொடியேற்றத்துடன்
              ஒருவாரம் நவநாள் திருப்பலி
            </Text>
          </VStack>
        </Box>

        {/* Vocations */}
        <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
          <Heading as="h3" size="lg" mb={4} color="gray.800">
            மண்ணின் இறையழைத்தல்கள்
          </Heading>
          <VStack align="start" spacing={2}>
            <Text fontSize="md" color="gray.700">
              • அருட்பணி. டேவிட் அலெக்ஸாண்டர், கோவை மறைமாவட்டம்
            </Text>
            <Text fontSize="md" color="gray.700">
              • அருட்பணி. சார்லஸ், OFM Cap
            </Text>
          </VStack>
        </Box>

        {/* Location Map */}
         <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
          <Heading as="h3" size="lg" mb={4} color="gray.800">
            Location Map
          </Heading>
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9202970767888!2d76.98149507486103!3d11.044602489120905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8586c51229a1f%3A0x2e136b6f7c84404a!2sSt.%20Francis%20of%20Assisi%20Church!5e0!3m2!1sen!2sin!4v1761414364388!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="St. Francis of Assisi Church Location"
            />
          </AspectRatio>
        </Box>

        {/* History Section */}
        <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
          <Heading as="h3" size="lg" mb={4} color="gray.800">
            வரலாறு
          </Heading>
          <VStack align="start" spacing={4}>
            <Text fontSize="md" color="gray.700" lineHeight="tall">
              20 -ம் நூற்றாண்டின் பிற்பகுதியில் தொழிற்சாலைகள், மென்பொருள்
              நிறுவனங்கள் மற்றும் பல்வேறு தொழில் வளங்கள் காரணமாக கோவை
              மாநகரமானது மிக வேகமாக வளர்ந்து வந்தது. கிழக்கில் அவினாசி,
              பல்லடம், தெற்கில் பொள்ளாச்சி, மேற்கில் மருத்துவா மலை, வடக்கில்
              மேட்டுப்பாளையம், அன்னூர் வரை கோவையின் வளர்ச்சி பரந்து விரிந்து
              கிடக்கிறது.
            </Text>
            <Text fontSize="md" color="gray.700" lineHeight="tall">
              01.06.1990 அன்று கணபதி, புனித பிரான்சிஸ் அசிசியார் ஆலயம் தனிப்
              பங்காக உருவானது. அருட்பணி. உபகார மரிய சேவியர் அவர்கள் முதல்
              பங்குத்தந்தையாக பணிப் பொறுப்பேற்று வழிநடத்தினார். ஆலய
              கட்டுமானப் பணிகள் நிறைவு பெற்று 09.10.1994 அன்று மேதகு ஆயர்
              அம்புரோஸ் அவர்களால் அர்ச்சிக்கப்பட்டது.
            </Text>
          </VStack>
        </Box>

        {/* Parish Priests List */}
        <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
          <Heading as="h3" size="lg" mb={4} color="gray.800">
            பங்கில் பணியாற்றிய பங்குத்தந்தையர்கள் பட்டியல்
          </Heading>
          <VStack align="start" spacing={2}>
            <Text fontSize="md" color="gray.700">
              • அருட்பணி. உபகார மரிய சேவியர் (1990-1995)
            </Text>
            <Text fontSize="md" color="gray.700">
              • அருட்பணி. ஸ்டீபன் ஆரோக்கிய ராஜ் (1995-1999)
            </Text>
            <Text fontSize="md" color="gray.700">
              • அருட்பணி. ஜோசப் தனராஜ் (1999-2002)
            </Text>
            <Text fontSize="md" color="gray.700">
              • அருட்பணி. ஜெயபால் (2002-2004)
            </Text>
            <Text fontSize="md" color="gray.700">
              • அருட்பணி. பால்ராஜ் வின்சென்ட் (2004-2006)
            </Text>
            <Text fontSize="md" color="gray.700">
              • அருட்பணி. C. S. மதலைமுத்து (2006-2011)
            </Text>
            <Text fontSize="md" color="gray.700">
              • அருட்பணி. ஜோசப் பிரகாசம் (2011-2016)
            </Text>
            <Text fontSize="md" color="gray.700">
              • அருட்பணி. ஜான் பால் வின்சென்ட் (2016-2025)
            </Text>
            <Text fontSize="md" fontWeight="semibold" color="gray.800">
              • அருட்பணி. விக்டர் பால்ராஜ் (2025 – தற்போது)
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Layout>
  );
}
