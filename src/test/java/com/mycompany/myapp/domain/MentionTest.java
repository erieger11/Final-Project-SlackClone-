package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.MentionTestSamples.*;
import static com.mycompany.myapp.domain.MessageTestSamples.*;
import static com.mycompany.myapp.domain.UserProfileTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class MentionTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Mention.class);
        Mention mention1 = getMentionSample1();
        Mention mention2 = new Mention();
        assertThat(mention1).isNotEqualTo(mention2);

        mention2.setId(mention1.getId());
        assertThat(mention1).isEqualTo(mention2);

        mention2 = getMentionSample2();
        assertThat(mention1).isNotEqualTo(mention2);
    }

    @Test
    void messageTest() throws Exception {
        Mention mention = getMentionRandomSampleGenerator();
        Message messageBack = getMessageRandomSampleGenerator();

        mention.setMessage(messageBack);
        assertThat(mention.getMessage()).isEqualTo(messageBack);

        mention.message(null);
        assertThat(mention.getMessage()).isNull();
    }

    @Test
    void userProfileTest() throws Exception {
        Mention mention = getMentionRandomSampleGenerator();
        UserProfile userProfileBack = getUserProfileRandomSampleGenerator();

        mention.setUserProfile(userProfileBack);
        assertThat(mention.getUserProfile()).isEqualTo(userProfileBack);

        mention.userProfile(null);
        assertThat(mention.getUserProfile()).isNull();
    }
}
