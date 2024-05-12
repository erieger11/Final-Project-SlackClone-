package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.ChannelTestSamples.*;
import static com.mycompany.myapp.domain.MentionTestSamples.*;
import static com.mycompany.myapp.domain.MessageTestSamples.*;
import static com.mycompany.myapp.domain.UserProfileTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class MessageTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Message.class);
        Message message1 = getMessageSample1();
        Message message2 = new Message();
        assertThat(message1).isNotEqualTo(message2);

        message2.setId(message1.getId());
        assertThat(message1).isEqualTo(message2);

        message2 = getMessageSample2();
        assertThat(message1).isNotEqualTo(message2);
    }

    @Test
    void channelTest() throws Exception {
        Message message = getMessageRandomSampleGenerator();
        Channel channelBack = getChannelRandomSampleGenerator();

        message.setChannel(channelBack);
        assertThat(message.getChannel()).isEqualTo(channelBack);

        message.channel(null);
        assertThat(message.getChannel()).isNull();
    }

    @Test
    void userProfileTest() throws Exception {
        Message message = getMessageRandomSampleGenerator();
        UserProfile userProfileBack = getUserProfileRandomSampleGenerator();

        message.setUserProfile(userProfileBack);
        assertThat(message.getUserProfile()).isEqualTo(userProfileBack);

        message.userProfile(null);
        assertThat(message.getUserProfile()).isNull();
    }

    @Test
    void mentionsTest() throws Exception {
        Message message = getMessageRandomSampleGenerator();
        Mention mentionBack = getMentionRandomSampleGenerator();

        message.addMentions(mentionBack);
        assertThat(message.getMentions()).containsOnly(mentionBack);
        assertThat(mentionBack.getMessage()).isEqualTo(message);

        message.removeMentions(mentionBack);
        assertThat(message.getMentions()).doesNotContain(mentionBack);
        assertThat(mentionBack.getMessage()).isNull();

        message.mentions(new HashSet<>(Set.of(mentionBack)));
        assertThat(message.getMentions()).containsOnly(mentionBack);
        assertThat(mentionBack.getMessage()).isEqualTo(message);

        message.setMentions(new HashSet<>());
        assertThat(message.getMentions()).doesNotContain(mentionBack);
        assertThat(mentionBack.getMessage()).isNull();
    }
}
