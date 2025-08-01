import type { BaseClient } from "./BaseClient";
import type { UnsafePiefedClient } from "./providers/piefed";

import { UnsafeLemmyV0Client } from "./providers/lemmyv0";
import { UnsafeLemmyV1Client } from "./providers/lemmyv1";
import * as schemas from "./schemas";

type AnyClient =
  | typeof UnsafeLemmyV0Client
  | typeof UnsafeLemmyV1Client
  | typeof UnsafePiefedClient;

export default function buildSafeClient(_Client: AnyClient): AnyClient {
  // Typescript is not smart enough to infer the correct type from the union
  // Since they all implement BaseClient, cast to the first one
  const Client = _Client as typeof UnsafeLemmyV0Client;

  return class SafeClient extends Client {
    async banFromCommunity(
      ...params: Parameters<BaseClient["banFromCommunity"]>
    ) {
      return super.banFromCommunity(...params);
    }

    async blockCommunity(...params: Parameters<BaseClient["blockCommunity"]>) {
      const { community_view } = await super.blockCommunity(...params);
      return { community_view: schemas.CommunityView.parse(community_view) };
    }

    async blockInstance(...params: Parameters<BaseClient["blockInstance"]>) {
      return super.blockInstance(...params);
    }

    async blockPerson(...params: Parameters<BaseClient["blockPerson"]>) {
      const { person_view } = await super.blockPerson(...params);
      return { person_view: schemas.PersonView.parse(person_view) };
    }

    async createComment(...params: Parameters<BaseClient["createComment"]>) {
      const { comment_view } = await super.createComment(...params);
      return { comment_view: schemas.CommentView.parse(comment_view) };
    }

    async createCommentReport(
      ...params: Parameters<BaseClient["createCommentReport"]>
    ) {
      return super.createCommentReport(...params);
    }

    async createPost(...params: Parameters<BaseClient["createPost"]>) {
      const { post_view } = await super.createPost(...params);
      return { post_view: schemas.PostView.parse(post_view) };
    }

    async createPostReport(
      ...params: Parameters<BaseClient["createPostReport"]>
    ) {
      return super.createPostReport(...params);
    }

    async createPrivateMessage(
      ...params: Parameters<BaseClient["createPrivateMessage"]>
    ) {
      const { private_message_view } = await super.createPrivateMessage(
        ...params,
      );
      return {
        private_message_view:
          schemas.PrivateMessageView.parse(private_message_view),
      };
    }

    async createPrivateMessageReport(
      ...params: Parameters<BaseClient["createPrivateMessageReport"]>
    ) {
      return super.createPrivateMessageReport(...params);
    }

    async deleteComment(...params: Parameters<BaseClient["deleteComment"]>) {
      const { comment_view } = await super.deleteComment(...params);
      return { comment_view: schemas.CommentView.parse(comment_view) };
    }

    async deleteImage(...params: Parameters<BaseClient["deleteImage"]>) {
      return super.deleteImage(...params);
    }

    async deletePost(...params: Parameters<BaseClient["deletePost"]>) {
      const { post_view } = await super.deletePost(...params);
      return { post_view: schemas.PostView.parse(post_view) };
    }

    async distinguishComment(
      ...params: Parameters<BaseClient["distinguishComment"]>
    ) {
      const { comment_view } = await super.distinguishComment(...params);
      return { comment_view: schemas.CommentView.parse(comment_view) };
    }

    async editComment(...params: Parameters<BaseClient["editComment"]>) {
      const { comment_view } = await super.editComment(...params);
      return { comment_view: schemas.CommentView.parse(comment_view) };
    }

    async editPost(...params: Parameters<BaseClient["editPost"]>) {
      const { post_view } = await super.editPost(...params);
      return { post_view: schemas.PostView.parse(post_view) };
    }

    async featurePost(...params: Parameters<BaseClient["featurePost"]>) {
      const { post_view } = await super.featurePost(...params);
      return { post_view: schemas.PostView.parse(post_view) };
    }

    async followCommunity(
      ...params: Parameters<BaseClient["followCommunity"]>
    ) {
      const { community_view } = await super.followCommunity(...params);
      return { community_view: schemas.CommunityView.parse(community_view) };
    }

    async getCaptcha(...params: Parameters<BaseClient["getCaptcha"]>) {
      const response = await super.getCaptcha(...params);
      return schemas.GetCaptchaResponse.parse(response);
    }

    async getComments(...params: Parameters<BaseClient["getComments"]>) {
      const response = await super.getComments(...params);
      return schemas.ListCommentsResponse.parse(response);
    }

    async getCommunity(...params: Parameters<BaseClient["getCommunity"]>) {
      const response = await super.getCommunity(...params);
      return schemas.GetCommunityResponse.parse(response);
    }

    async getFederatedInstances(
      ...params: Parameters<BaseClient["getFederatedInstances"]>
    ) {
      const { federated_instances } = await super.getFederatedInstances(
        ...params,
      );
      return {
        federated_instances: federated_instances
          ? schemas.FederatedInstances.parse(federated_instances)
          : undefined,
      };
    }

    async getModlog(...params: Parameters<BaseClient["getModlog"]>) {
      const response = await super.getModlog(...params);
      return schemas.ListModlogResponse.parse(response);
    }

    async getNotifications(
      ...params: Parameters<BaseClient["getNotifications"]>
    ) {
      const response = await super.getNotifications(...params);
      return schemas.ListNotificationsResponse.parse(response);
    }

    async getPersonDetails(
      ...params: Parameters<BaseClient["getPersonDetails"]>
    ) {
      const response = await super.getPersonDetails(...params);
      return schemas.GetPersonDetailsResponse.parse(response);
    }

    async getPersonMentions(
      ...params: Parameters<BaseClient["getPersonMentions"]>
    ) {
      const response = await super.getPersonMentions(...params);
      return schemas.ListPersonMentionsResponse.parse(response);
    }

    async getPost(...params: Parameters<BaseClient["getPost"]>) {
      const { post_view } = await super.getPost(...params);
      return { post_view: schemas.PostView.parse(post_view) };
    }

    async getPosts(...params: Parameters<BaseClient["getPosts"]>) {
      const response = await super.getPosts(...params);
      return schemas.ListPostsResponse.parse(response);
    }

    async getPrivateMessages(
      ...params: Parameters<BaseClient["getPrivateMessages"]>
    ) {
      const response = await super.getPrivateMessages(...params);
      return schemas.ListPrivateMessagesResponse.parse(response);
    }

    async getRandomCommunity(
      ...params: Parameters<BaseClient["getRandomCommunity"]>
    ) {
      const { community_view } = await super.getRandomCommunity(...params);
      return { community_view: schemas.CommunityView.parse(community_view) };
    }

    async getReplies(...params: Parameters<BaseClient["getReplies"]>) {
      const response = await super.getReplies(...params);
      return schemas.ListRepliesResponse.parse(response);
    }

    async getSite(...params: Parameters<BaseClient["getSite"]>) {
      const response = await super.getSite(...params);
      return schemas.GetSiteResponse.parse(response);
    }

    async getSiteMetadata(
      ...params: Parameters<BaseClient["getSiteMetadata"]>
    ) {
      const response = await super.getSiteMetadata(...params);
      return schemas.GetSiteMetadataResponse.parse(response);
    }

    async getUnreadCount(...params: Parameters<BaseClient["getUnreadCount"]>) {
      const response = await super.getUnreadCount(...params);
      return schemas.GetUnreadCountResponse.parse(response);
    }

    async likeComment(...params: Parameters<BaseClient["likeComment"]>) {
      const { comment_view } = await super.likeComment(...params);
      return { comment_view: schemas.CommentView.parse(comment_view) };
    }

    async likePost(...params: Parameters<BaseClient["likePost"]>) {
      const { post_view } = await super.likePost(...params);
      return { post_view: schemas.PostView.parse(post_view) };
    }

    async listCommentReports(
      ...params: Parameters<BaseClient["listCommentReports"]>
    ) {
      const response = await super.listCommentReports(...params);
      return schemas.ListCommentReportsResponse.parse(response);
    }

    async listCommunities(
      ...params: Parameters<BaseClient["listCommunities"]>
    ) {
      const response = await super.listCommunities(...params);
      return schemas.ListCommunitiesResponse.parse(response);
    }

    async listPersonContent(
      ...params: Parameters<BaseClient["listPersonContent"]>
    ) {
      const response = await super.listPersonContent(...params);
      return schemas.ListPersonContentResponse.parse(response);
    }

    async listPersonLiked(
      ...params: Parameters<BaseClient["listPersonLiked"]>
    ) {
      const response = await super.listPersonLiked(...params);
      return schemas.ListPersonContentResponse.parse(response);
    }

    async listPersonSaved(
      ...params: Parameters<BaseClient["listPersonSaved"]>
    ) {
      const response = await super.listPersonSaved(...params);
      return schemas.ListPersonContentResponse.parse(response);
    }

    async listPostReports(
      ...params: Parameters<BaseClient["listPostReports"]>
    ) {
      const response = await super.listPostReports(...params);
      return schemas.ListPostReportsResponse.parse(response);
    }

    async listReports(...params: Parameters<BaseClient["listReports"]>) {
      const response = await super.listReports(...params);
      return schemas.ListReportsResponse.parse(response);
    }

    async lockPost(...params: Parameters<BaseClient["lockPost"]>) {
      const { post_view } = await super.lockPost(...params);
      return { post_view: schemas.PostView.parse(post_view) };
    }

    async login(...params: Parameters<BaseClient["login"]>) {
      const response = await super.login(...params);
      return schemas.LoginResponse.parse(response);
    }

    async logout(...params: Parameters<BaseClient["logout"]>) {
      return super.logout(...params);
    }

    async markAllAsRead(...params: Parameters<BaseClient["markAllAsRead"]>) {
      return super.markAllAsRead(...params);
    }

    async markCommentReplyAsRead(
      ...params: Parameters<BaseClient["markCommentReplyAsRead"]>
    ) {
      return super.markCommentReplyAsRead(...params);
    }

    async markPersonMentionAsRead(
      ...params: Parameters<BaseClient["markPersonMentionAsRead"]>
    ) {
      return super.markPersonMentionAsRead(...params);
    }

    async markPostAsRead(...params: Parameters<BaseClient["markPostAsRead"]>) {
      return super.markPostAsRead(...params);
    }

    async markPrivateMessageAsRead(
      ...params: Parameters<BaseClient["markPrivateMessageAsRead"]>
    ) {
      return super.markPrivateMessageAsRead(...params);
    }

    async register(...params: Parameters<BaseClient["register"]>) {
      const response = await super.register(...params);
      return schemas.LoginResponse.parse(response);
    }

    async removeComment(...params: Parameters<BaseClient["removeComment"]>) {
      const { comment_view } = await super.removeComment(...params);
      return { comment_view: schemas.CommentView.parse(comment_view) };
    }

    async removePost(...params: Parameters<BaseClient["removePost"]>) {
      const { post_view } = await super.removePost(...params);
      return { post_view: schemas.PostView.parse(post_view) };
    }

    async resolveCommentReport(
      ...params: Parameters<BaseClient["resolveCommentReport"]>
    ) {
      return super.resolveCommentReport(...params);
    }

    async resolveObject(...params: Parameters<BaseClient["resolveObject"]>) {
      const response = await super.resolveObject(...params);
      return schemas.ResolveObjectResponse.parse(response);
    }

    async resolvePostReport(
      ...params: Parameters<BaseClient["resolvePostReport"]>
    ) {
      return super.resolvePostReport(...params);
    }

    async saveComment(...params: Parameters<BaseClient["saveComment"]>) {
      const { comment_view } = await super.saveComment(...params);
      return { comment_view: schemas.CommentView.parse(comment_view) };
    }

    async savePost(...params: Parameters<BaseClient["savePost"]>) {
      const { post_view } = await super.savePost(...params);
      return { post_view: schemas.PostView.parse(post_view) };
    }

    async saveUserSettings(
      ...params: Parameters<BaseClient["saveUserSettings"]>
    ) {
      return super.saveUserSettings(...params);
    }

    async search(...params: Parameters<BaseClient["search"]>) {
      const response = await super.search(...params);
      return schemas.ListSearchResponse.parse(response);
    }

    async uploadImage(...params: Parameters<BaseClient["uploadImage"]>) {
      const response = await super.uploadImage(...params);
      return schemas.UploadImageResponse.parse(response);
    }
  };
}
