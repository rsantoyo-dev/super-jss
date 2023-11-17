import { Component } from "@angular/core";
import { SjDirective } from "projects/super-jss/src/lib/directives/sj.directive";
import {SjStyle} from "../../../super-jss/src/lib/models/interfaces";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SjDirective],
  template: `
    <div [sj]="{d:'flex', px:{xs:1, md:8}, py: {xs:1.5, md:3}, gap:{xs:1, md:2}, fxDir:'column', bg:{xs:'primary', sm:'secondary', md:'tertiary'}, c:'primary.contrast'}">
    <div [sj]="{fontWeight:'bold', bg:'gray', mx:{xs:1, md:4}}">BOLD</div>
    <h1 [sj]>h1: The quick brown fox jumps over the lazy dog</h1>
    <h2 [sj]>h2: The quick brown fox jumps over the lazy dog</h2>
    <h3 [sj]>h3: The quick brown fox jumps over the lazy dog</h3>
    <h4 [sj]>h4: The quick brown fox jumps over the lazy dog</h4>
    <h5 [sj]>h5: The quick brown fox jumps over the lazy dog</h5>
    <h6 [sj]>h6: The quick brown fox jumps over the lazy dog</h6>
    <p [sj]>p: The quick brown fox jumps over the lazy dog</p>
    <span [sj]>span: The quick brown fox jumps over the lazy dog</span>
    <strong [sj]>strong: The quick brown fox jumps over the lazy dog</strong>
    <body [sj]>body: The quick brown fox jumps over the lazy dog</body>
    <caption [sj]>caption: The quick brown fox jumps over the lazy dog</caption>
    <button [sj]>button: The quick brown fox jumps over the lazy dog</button>
    </div>
  `
})


export class AppComponent {
  mySjClass:SjStyle = {display:'flex', p: 5, margin: 1, flexDirection:{xs: 'column', sm: 'row'}, backgroundColor:'yellow', color:'purple'}
}

