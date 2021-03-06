import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../login/login.service'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor(private http: HttpClient, private router: ActivatedRoute, private loginService: LoginService) { }

  sendReply(topicId: string, content: string, replyId?: string):Observable<any> {
    return this.http.post<any>(`topic/${topicId}/replies`, { accesstoken: this.loginService.userInfo.token, content, replyId })
  }

}
