import {
  HttpClient,
  HttpHeaders,
  init_http
} from "./chunk-H5MBOYMX.js";
import {
  Injectable,
  __decorate,
  catchError,
  init_core,
  init_esm,
  init_tslib_es6,
  map,
  of
} from "./chunk-HWYXDFSJ.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/services/users-service.ts
var UsersServices;
var init_users_service = __esm({
  "src/app/services/users-service.ts"() {
    "use strict";
    init_tslib_es6();
    init_http();
    init_core();
    init_esm();
    UsersServices = class UsersServices2 {
      http;
      baseURL = "https://gorest.co.in/public/v2";
      constructor(http) {
        this.http = http;
      }
      get authHeaders() {
        const token = localStorage.getItem("access_token") || "";
        return {
          headers: new HttpHeaders({
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          })
        };
      }
      getUsers(page = 1, forPage = 10) {
        return this.http.get(`${this.baseURL}/users?page=${page}&per_page=${forPage}`, this.authHeaders).pipe(catchError((error) => {
          console.error("\u274C Error retrieving users:", error);
          return of([]);
        }));
      }
      getUserById(id) {
        return this.http.get(`${this.baseURL}/users/${id}`, this.authHeaders).pipe(catchError((error) => {
          console.error("\u274C Error retrieving user:", error);
          return of(null);
        }));
      }
      getUserByEmail(email) {
        return this.http.get(`${this.baseURL}/users?email=${email}`, this.authHeaders).pipe(catchError((error) => {
          console.error("\u274C Error fetching user by email:", error);
          return of([]);
        }));
      }
      deleteUser(id) {
        return this.http.delete(`${this.baseURL}/users/${id}`, this.authHeaders).pipe(map(() => true), catchError((error) => {
          console.error("\u274C Error deleting user:", error);
          return of(false);
        }));
      }
      addUser(user) {
        return this.http.post(`${this.baseURL}/users`, user, this.authHeaders).pipe(catchError((error) => {
          console.error("\u274C User creation error:", error.error);
          return of(null);
        }));
      }
      getPostsByUser(userID) {
        return this.http.get(`${this.baseURL}/users/${userID}/posts`, this.authHeaders).pipe(catchError((error) => {
          console.error("\u274CError in user post recovery: ", error);
          return of([]);
        }));
      }
      getAllPosts() {
        return this.http.get(`${this.baseURL}/posts`, this.authHeaders).pipe(catchError((error) => {
          console.error("\u274C Post recovery error: ", error);
          return of([]);
        }));
      }
      getCommentsByPost(postID) {
        return this.http.get(`${this.baseURL}/posts/${postID}/comments`, this.authHeaders).pipe(catchError((error) => {
          console.error("\u274C Error retrieving comments:", error);
          return of([]);
        }));
      }
      addComment(postID, commentBody) {
        const userCurrentId = localStorage.getItem("user_current");
        const userObj = userCurrentId ? JSON.parse(userCurrentId) : null;
        const commentPayload = {
          post_id: postID,
          name: userObj?.name ?? "Unknown",
          email: userObj?.email ?? "unknown@example.com",
          body: commentBody
        };
        return this.http.post(`${this.baseURL}/posts/${postID}/comments`, commentPayload, this.authHeaders).pipe(catchError((error) => {
          console.error("\u274C Error inserting comment:", error);
          return of(null);
        }));
      }
      deleteComment(commentID) {
        return this.http.delete(`${this.baseURL}/comments/${commentID}`, this.authHeaders).pipe(map(() => true), catchError((error) => {
          console.error("\u274C Error deleting comment:", error);
          return of(false);
        }));
      }
      addNewPost(data) {
        const userCurrent = () => {
          const userCurrentId = localStorage.getItem("user_current");
          return userCurrentId ? JSON.parse(userCurrentId) : null;
        };
        const postPayload = {
          title: data.title,
          body: data.body,
          user_id: userCurrent().id
        };
        return this.http.post(`${this.baseURL}/posts`, postPayload, this.authHeaders).pipe(catchError((error) => {
          console.error("\u274C Error creating new post:", error);
          return of(null);
        }));
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    UsersServices = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], UsersServices);
  }
});

export {
  UsersServices,
  init_users_service
};
//# sourceMappingURL=chunk-MYMEVESU.js.map
