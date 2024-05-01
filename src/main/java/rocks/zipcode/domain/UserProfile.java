package rocks.zipcode.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A UserProfile.
 */
@Entity
@Table(name = "user_profile")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class UserProfile implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @NotNull
    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "timezone")
    private Integer timezone;

    @Column(name = "phone")
    private Integer phone;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = { "mentions", "senders", "channels" }, allowSetters = true)
    private Message messages;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "rel_user_profile__workspaces",
        joinColumns = @JoinColumn(name = "user_profile_id"),
        inverseJoinColumns = @JoinColumn(name = "workspaces_id")
    )
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "members" }, allowSetters = true)
    private Set<Workspace> workspaces = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "rel_user_profile__channels",
        joinColumns = @JoinColumn(name = "user_profile_id"),
        inverseJoinColumns = @JoinColumn(name = "channels_id")
    )
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "messages", "members" }, allowSetters = true)
    private Set<Channel> channels = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public UserProfile id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public UserProfile name(String name) {
        this.setName(name);
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return this.email;
    }

    public UserProfile email(String email) {
        this.setEmail(email);
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getTimezone() {
        return this.timezone;
    }

    public UserProfile timezone(Integer timezone) {
        this.setTimezone(timezone);
        return this;
    }

    public void setTimezone(Integer timezone) {
        this.timezone = timezone;
    }

    public Integer getPhone() {
        return this.phone;
    }

    public UserProfile phone(Integer phone) {
        this.setPhone(phone);
        return this;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public Message getMessages() {
        return this.messages;
    }

    public void setMessages(Message message) {
        this.messages = message;
    }

    public UserProfile messages(Message message) {
        this.setMessages(message);
        return this;
    }

    public Set<Workspace> getWorkspaces() {
        return this.workspaces;
    }

    public void setWorkspaces(Set<Workspace> workspaces) {
        this.workspaces = workspaces;
    }

    public UserProfile workspaces(Set<Workspace> workspaces) {
        this.setWorkspaces(workspaces);
        return this;
    }

    public UserProfile addWorkspaces(Workspace workspace) {
        this.workspaces.add(workspace);
        return this;
    }

    public UserProfile removeWorkspaces(Workspace workspace) {
        this.workspaces.remove(workspace);
        return this;
    }

    public Set<Channel> getChannels() {
        return this.channels;
    }

    public void setChannels(Set<Channel> channels) {
        this.channels = channels;
    }

    public UserProfile channels(Set<Channel> channels) {
        this.setChannels(channels);
        return this;
    }

    public UserProfile addChannels(Channel channel) {
        this.channels.add(channel);
        return this;
    }

    public UserProfile removeChannels(Channel channel) {
        this.channels.remove(channel);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof UserProfile)) {
            return false;
        }
        return getId() != null && getId().equals(((UserProfile) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "UserProfile{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", email='" + getEmail() + "'" +
            ", timezone=" + getTimezone() +
            ", phone=" + getPhone() +
            "}";
    }
}
