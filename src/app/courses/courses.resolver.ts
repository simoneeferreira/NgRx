import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { first, tap } from "rxjs/operators";
import { AppState } from "../reducers";
import { loadAllCourses } from "./course.actions";

@Injectable()
export class CoursesResolver implements Resolve<any>{

    constructor(private store: Store<AppState>) {
        
    }

    resolve(route: ActivatedRouteSnapshot, 
            state:RouterStateSnapshot): Observable<any> {
    
        return this.store
            .pipe(
                tap(() => {
                    this.store.dispatch(loadAllCourses());
                }),
                first()
            );
    }
}