package rocks.zipcode.domain;

import static org.assertj.core.api.Assertions.assertThat;
import static rocks.zipcode.domain.ChannelTestSamples.*;
import static rocks.zipcode.domain.MessageTestSamples.*;
import static rocks.zipcode.domain.UserProfileTestSamples.*;
import static rocks.zipcode.domain.WorkspaceTestSamples.*;

import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;
import rocks.zipcode.web.rest.TestUtil;

class UserProfileTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(UserProfile.class);
        UserProfile userProfile1 = getUserProfileSample1();
        UserProfile userProfile2 = new UserProfile();
        assertThat(userProfile1).isNotEqualTo(userProfile2);

        userProfile2.setId(userProfile1.getId());
        assertThat(userProfile1).isEqualTo(userProfile2);

        userProfile2 = getUserProfileSample2();
        assertThat(userProfile1).isNotEqualTo(userProfile2);
    }

    @Test
    void messagesTest() throws Exception {
        UserProfile userProfile = getUserProfileRandomSampleGenerator();
        Message messageBack = getMessageRandomSampleGenerator();

        userProfile.setMessages(messageBack);
        assertThat(userProfile.getMessages()).isEqualTo(messageBack);

        userProfile.messages(null);
        assertThat(userProfile.getMessages()).isNull();
    }

    @Test
    void workspacesTest() throws Exception {
        UserProfile userProfile = getUserProfileRandomSampleGenerator();
        Workspace workspaceBack = getWorkspaceRandomSampleGenerator();

        userProfile.addWorkspaces(workspaceBack);
        assertThat(userProfile.getWorkspaces()).containsOnly(workspaceBack);

        userProfile.removeWorkspaces(workspaceBack);
        assertThat(userProfile.getWorkspaces()).doesNotContain(workspaceBack);

        userProfile.workspaces(new HashSet<>(Set.of(workspaceBack)));
        assertThat(userProfile.getWorkspaces()).containsOnly(workspaceBack);

        userProfile.setWorkspaces(new HashSet<>());
        assertThat(userProfile.getWorkspaces()).doesNotContain(workspaceBack);
    }

    @Test
    void channelsTest() throws Exception {
        UserProfile userProfile = getUserProfileRandomSampleGenerator();
        Channel channelBack = getChannelRandomSampleGenerator();

        userProfile.addChannels(channelBack);
        assertThat(userProfile.getChannels()).containsOnly(channelBack);

        userProfile.removeChannels(channelBack);
        assertThat(userProfile.getChannels()).doesNotContain(channelBack);

        userProfile.channels(new HashSet<>(Set.of(channelBack)));
        assertThat(userProfile.getChannels()).containsOnly(channelBack);

        userProfile.setChannels(new HashSet<>());
        assertThat(userProfile.getChannels()).doesNotContain(channelBack);
    }
}
