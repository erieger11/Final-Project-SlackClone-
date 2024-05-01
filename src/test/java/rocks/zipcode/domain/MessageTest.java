package rocks.zipcode.domain;

import static org.assertj.core.api.Assertions.assertThat;
import static rocks.zipcode.domain.ChannelTestSamples.*;
import static rocks.zipcode.domain.MentionTestSamples.*;
import static rocks.zipcode.domain.MessageTestSamples.*;
import static rocks.zipcode.domain.UserProfileTestSamples.*;

import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;
import rocks.zipcode.web.rest.TestUtil;

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
    void mentionsTest() throws Exception {
        Message message = getMessageRandomSampleGenerator();
        Mention mentionBack = getMentionRandomSampleGenerator();

        message.setMentions(mentionBack);
        assertThat(message.getMentions()).isEqualTo(mentionBack);

        message.mentions(null);
        assertThat(message.getMentions()).isNull();
    }

    @Test
    void senderTest() throws Exception {
        Message message = getMessageRandomSampleGenerator();
        UserProfile userProfileBack = getUserProfileRandomSampleGenerator();

        message.addSender(userProfileBack);
        assertThat(message.getSenders()).containsOnly(userProfileBack);
        assertThat(userProfileBack.getMessages()).isEqualTo(message);

        message.removeSender(userProfileBack);
        assertThat(message.getSenders()).doesNotContain(userProfileBack);
        assertThat(userProfileBack.getMessages()).isNull();

        message.senders(new HashSet<>(Set.of(userProfileBack)));
        assertThat(message.getSenders()).containsOnly(userProfileBack);
        assertThat(userProfileBack.getMessages()).isEqualTo(message);

        message.setSenders(new HashSet<>());
        assertThat(message.getSenders()).doesNotContain(userProfileBack);
        assertThat(userProfileBack.getMessages()).isNull();
    }

    @Test
    void channelTest() throws Exception {
        Message message = getMessageRandomSampleGenerator();
        Channel channelBack = getChannelRandomSampleGenerator();

        message.addChannel(channelBack);
        assertThat(message.getChannels()).containsOnly(channelBack);
        assertThat(channelBack.getMessages()).isEqualTo(message);

        message.removeChannel(channelBack);
        assertThat(message.getChannels()).doesNotContain(channelBack);
        assertThat(channelBack.getMessages()).isNull();

        message.channels(new HashSet<>(Set.of(channelBack)));
        assertThat(message.getChannels()).containsOnly(channelBack);
        assertThat(channelBack.getMessages()).isEqualTo(message);

        message.setChannels(new HashSet<>());
        assertThat(message.getChannels()).doesNotContain(channelBack);
        assertThat(channelBack.getMessages()).isNull();
    }
}
