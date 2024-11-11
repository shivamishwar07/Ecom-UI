import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class DisplayItemComponent {
  items: any = [
    {
      "title": "SHOP BEDROOM",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WB8iGLZEePtUn2bPmQ-SDrRcqajibK6bJDVNWvsUrQq8-O-PWpCG-YI&s"
    },
    {
      "title": "SHOP DINING",
      "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFhUXGB0YGBgYGBoXHxgXGCAYFxgXIBsbHyggGholHhcYITEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGi8lICUvNy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAK8BIAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgcBAAj/xABLEAABAwIDBAYGBwUGBAYDAAABAgMRACEEEjEFIkFRBhNhcYGRFDJCobHBByNSYnLR8CRzgrLhM5Kis8LxFTRj0hZDU2R0oxdEVP/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACYRAAICAgICAQUAAwAAAAAAAAABAhEhMQMSQVETBCIyYXFCodH/2gAMAwEAAhEDEQA/AOm9PV/ssf8AWY/zmq0DDuYTWZ6bMzhydD1rECRcB5onTj3mnjJAhMR2CY5251DbEc8+nX1Nn2v6Wm/gf6eVPVpsPH40i+nM7uzx/wC7B90fOtC4LJ8fjTkVHZUBUgK9Ar2KzNBp0fMFw8gPnTLaCwWXSPsK+Bpd0fTdfcPnTDbH9g7+7V/Ka1jozlss2efqm/wJ+AoYn9rH7k/zipYB4hpuU2yJ+AoJbpGNEX/Zz/OKOyoQw2wf2d792v8AlNEseqnuFA7XeHo737tf8pq5l0lAIIiBU91WAK0kB939238XaXbfwjSwjM0g/WtaoSdVpHEcpq0YoB1ZImUI9xdrza90ojUutR/fTae/hSy2FlTnR/DKC0+jMpzJUmQ2hJuCNQJms59FqD/w5bZP9mp1P+Jav9VbXDEyJ7ayH0aCMPiwf/Xe+VNaEthkVU66EwDN+QJ07u8VeRQWMMKH4FfFNQzYmMUjn7jUg+n7QpetYTJJ5nyF/cK9w+KQslKVgkG4HCMqvgpPnQK0MM4OhB8a8ioi5T/GPIpHyq6KBkEpvRCU1BAvV4FAHiU1UpNGJTVSESaGBWhFSLdGIYr5xqs1NWOgEoorZibq8KFxWIQj1iBROxn0rKspBgDQ99aJiYxfG4r8J+FL2+7ztTR0bp7j8Kyy1rMXX/ej4VpCLbwZTmorI0dc5UrxYlXi38XKqKV938Sj86hhk7yt7N/ZT2Xd/P3VpOElG2Zw5YuVIe4lkbkcQJ8iflQKkAiQQQeOU/nTXED+z7v9JpbhU/Vo/CPhWRqe9LnycNB161jQf9ZqabsNKziSNJmdROnfWZ6YYfFpwwzPYdQ6/DiE4dxB3n2ki5fVaYkcQCJGtOfQcXcdYwdJ+rcT3f8AmHSs7VIKMT9M7snZ95/aZ1/B2Cta4LDx+NYb6WEPBzAJdyH6+ZTm1loDXhE1vXRYeNX/AIhHZQBXsVKK9ipNBlsDVfcPnRG2XwGHQSJ6pdv4TS7BOrSTkbzzrvBMa89f6Uu21iXw28tWHWfq16La4pP3tPnVxZnIe4WzbZB3sibc7D9eFL0Ok40Wj9nI0+/qOdV4PbSuqbHoz3qgSlTGsAcXZnypajay040qVhnjOH0C2DbPEyHoixtM9lTTyIfbZdBYejTq1wb8jytVzL5yJgXyj4Ui2ttc+jPfs76R1S7SyoRlVBgOFXlRzW0twDqnQogD1UG8RwUeFZOLoLL2HvrnbTDbfP2i9+VS2m9ZBPF1uOwZh+VK9n44ekvJKXRCWhdCuTirxbjRGP20jKndM5hYpKrjeHeeybxbjWrmo7IlJLY0LZVGWx1HKQOPZWa2GG4cUwpWVxRURIPVrgtKueAzTe4KTPKmOC22CEq38vrAZF2Sd6LJvAStP8M0l6HYVJYxebUYlxaSNSVmAB36DtNYzjeY7I7J6GTTsi+sCR3gHyvQW0HwkknQNLNrmAUZjHGBcxeAag86RqbpJtOoABCD2yn+as9tTGuBwhZ0QqFJgTlIOYG4tCiDcDKvNudaGVDk7Kns1jyWv2DbXxiitGsaKA0zAkePqud4WirOhOylkuYhUgLVAiBKU6KJ4iZjja1U7OwgW4lCgAkXjQBNhEHsSlCQb5UpJuYO5aaAgAQBoBwFaxQqySy7qPxO+5QFe1Y6ncb/ABP/AOYKiBVGyPW9aIAqlAvRApDLECl2OfKMpHb8qZIpVtdMhPj8qT0C2X4fbpNigE98VavGLVwAHZSDBK3jNN23BXHdPB0dVRB3DkrSrlw8x86K6PJWHHc2XLCcuVOU+1Mmb8O6vgoSK96NLUS4FaiPIlUV1cUsOzDkVNUPjS70HD/cjtKVfzTRz43Vdx+FBMp0reKMZfw9ThcONAj+ED/SKk4pkRMxIiQo3OmtWUDtTh3p+JokhoKxcSmNIPwNLsIn6tH4R8KYv6I/D8jQeEH1aPwj4CgCW2cL6Q0G1HLC21yNSWlodA8SiPGincYrgL85/pXxFDP1zSdG8YJmC+l9/MrZh49crjMQpoVuHRpXP/pOALmzeZfVP99mK6K8NPGt1+CMf8mDxX0VOK8ipLPmyeH65eFV7ZS71LhVp1ahaOR5a1J1akiQY4ULinyGlidW1AxyykcauJnIu2Y4Q03lN8qZHgI48YFUOZvTTuyfR7gAn2zPcPzr7CvkISBEFCeHYKoYejEnKTmOHgnkesPyjzoJJ7XdHVvQCPq168DlPlRmBeyhCuMC50iBxpdtJEsvk/8ApLNvwm/dTdCVdWiygMoFhrI7bcqJNAgRlYOJxClK9lqT4OVft9bfVt5EiS6hJsDKTIPnNLcEicS8k33G5/8AstRu2GwlLKQAD17VvE6nU691LGgqyGLayga7wUnKlCnDvJIJsRAAESSBbzS9FcelTCy2TdbhFvaVeAdCQFrjhmyVscOEKWlBTmBB1AOkm48qxP0a7GbeZedJIX1i0EgmCAEkbs5Sbm5BPdUuFmUofdaBMcsGVGQokIby/ZBImOIzZpB0AQNDQuIdTCW+KG1HUkjMUlN5k+qL6kgmMwBGrY2UQ9v7wyqvGpICJvMKykjW9L8ZsFEpWkkENqS598WCifvag2MgAH1UFPPHjqVhx8Uk7A9g4NLaVOr5Fwg8E3UBHYm3HiZJJNMNrbayABsArVITNhMqSCewEAnspLtzFKDvVpNlNvAjtUhSUj+8oUTs3ABw5lSU+yBeZEG0jdN+Mnu10UrTRo3mkOnm8aMoGHKglSgJUgEhagorVvaRwF8xPAAqbJwi/sn3U9dF6hTb6s3jH9icYdX2TUopqaVOq3z3mnGVjaomKHdZzQKIFUvLinLQls+w+BaHOecxS/aONLbmQJKhZU9ZHugwa+TjN4Uk248FvXAOVIAMXvB+dcqg/Js2hq5iVqUk5lAFKrZieCoPDlTLoowpJdzcSm97je58qSqulAAvkWkAQPZWB2cqP6DOPFT3W4cswEBJLqXSuM4k5fVIGXjeeytoQuV+v+IxkzVvjdV3H4UtCjoKZveqe4/ClfpSRxnuFdUMGUixsc6G2jw70/E1Y46fZBPhQS803BF0a96uFEpDiho/on8PyNDYRP1aPwj4Dsol8WT+H5VWwiEJB1CQD3x3UkJnpVQuINZnam3VNsg9YoL6xoE5M0pU6gKAhJ1QSOBM2vTPa22GghBAfSTEn0bE3kHQFsg8NO2uZw7K0dKnToy/0nAZ9lfv1f5jNdDfTp41yfpljw6/gACsw+PXaW1qtrTMhM++uuYhOlbr8EYv8mCxXkVYRXkVIwTF6Uvxx+qXrGRXnBo/abwQkE9ZBMbmWed8ykiLVn9o7Yhp0dQ9GRXFn7JgkdbPlNWpJESTHuydm5mEOKXlTlTwkmwocsNemZetP/LzMDXOBFe4raDqMC2j0V4S2kZszEEkAz/bTqZ0rFqxL3XjcdB6o+0mYKkcesjlaZv31E51guMLRudoYeGXhmSQGl3nXdUNNZmtFhsGFsoCiTKE6W4A1gi8pOCdUplal9W4rMVJ0ymLZjMWprs7pLilLaaDaBKAoJKr5RlBkxA1/pWsIOUezMZTUZdUeqw4bxj4SpRIDIA1JkPLOg4AGrNrNSGFA2L7QvqJULdn9aGw/pCtpYlwtIs0yAkvECVdZeQ2c1kRBA14zYnpDicTDALTI/aGSPr1nRVplmw7b91Yzl91IqjTtISFCw1tbsNYz6Iv+Te/fL/lRWgw+JxClpPVM2J0eWZMH/ojhNZD6OdodTs95cAnrl2Kkp0S3IlZA99HDai79hJpZNY8eIuReOY4j9cYpZinkBUEiCJHKFZfjBPjSnDqfXD6SpLabxCTmEg6i2XjIBsZmKH268st9bEJI1TfdBzKPEwBnPYCeE1EpkLlvwEPbBU44HDBTEm8ToImJggX7J0mmuFZCFREq1kJiEzcDUnuGnGKW4dzJCiVJAsAmZWdAO0yFXM6jS1HFl51sh1sJUFSghcEgRlKgkC/dpl0GlOCVjvOjWPPJn1h5iqTikTGdM8pFK2GlJQlKokCN2Y95JPnVT6FBYHZcd/z/KidbOmDbHJxCftDzFLl3Ue80LF6vTTjGhN2XCgtpLgDx+VGJNJ+kjmVKfH5VRIgxG1EIWAVpB5EgUA5tRtS1Kzp4cR2Vznpa7mxa55AfrzoHKLVLLSs6biNvpW4WwttAQdVZzmChNstta2HQB5BL2V5DhhEhBVujficw438q/P2KcUMoSAd2TPZrxrp30EOS5jbCwZH+dVKPkl+rOyuq3Vdx+FYHDOlSQZB/iUPgq3lW7Qqhhsljg0gdzaP+2teOUVfZWYckZuurox7oXzRHAFbpjuIWDTLZwN82u5fMpXFf2lEitD/AMLa+yP7qP8Atr4bMQNLaaBI0mNB2mqnOElhChGcXln2I0H4flVeHTKEkkyUjieX4quxQi33T8K8wvqJ/COPYPvVCNGc7xWJYWkpJyjMhRME/wBmtKxb+GPGtZtxxKw0pEKQUgg6DLlSU91lVzfECJNbbZWOQphmWyoJbSmy+wajKb251l1xSNe2bZmOlDSPScB1ghPXTu8SCjKJgwMwSDawJrVYbpSVf2rYBH2ZHO8GZtFU4vF4RRSXGCSgygqQ25lIgyJiDIF+yl2OfwaiVF5bc+yWSoa5rhKjO8SeenKhppJIE022xq50rQD/AGSotfMPH8/61cx0kSoGGyDHE8QLzy+U3vasWvF4ZRIQ+FFMzmbdTPP2TPM89DNVP7eSwJKFLHMEW4g3v26G5FxEVKU26KbglZsMdthSo3YAvBAPYRzkGQLwSeyQwRs4u4UuZZK2iQBe+UyIEyZtFuVc4b6Zsq1ZIHetXZ7JB58LzOtNcP0gaKB1ad1NoSom2nGSD2Hyro4/pZ3bZz8n1EKpI2+2EOFhhCW3CQhMwk2ISLHkZ58qyjuy3y8kjDuRkULggSVIjXx99RTtYISZbDqFDUGHBxtfKf8AD3mlDm0DnSUHMiddLaEX4juHcNKnk+ma+5lQ508I2+2MPiEsKbQEqCmlNBIWmwIKbyRciDym1CdE9nLQ8t/EFKHMoQhWdKt0QIjMYFuys5jsYoiG1X4eFE7SfOQXAUQJvMHiKpztJUQoU7s1DSnA/iHFKRC8iUnOi4bLgmAbWKTB+13gGbUdQvIQtEh5tfrewhQV+ZrCekK6lIURniD4aHyrzDvKDe8oEyYg+zw+dZuKbsqjoOBxKEuAlxGUGdewg/GlvQfAow2GcaxC2pU6pYAWFbqkoF47Um1YtJWkKKlcbDkO2hS8RKs0j4VSwhUdZdxaDAbU2rQQVRrYAUGvAZQPV3FZkgER6qhHmrSuP7RxSkguBy2ZJjsSUkjzFO8NtBam8pckkmOwGIHnNS4phWbOms4BMpURdIASOA4yBz/KiSz2HyrnvpbuZGVUwRm7ftH4miWdoO5icxy5efGRHz8qdFLBtyCJImwJ9xrn21MQ4lQOdXbvG9++k3SvHuH21WBIubcPCxjxpZg8aE4ZIKtM2p5qJrPkNIHTOjmKQW8zihaTvHWI4+Jo5L6VXQQU8wZ8KwDmInZpUm8rKQfAzB5zHlWr6NKBwrJHFPnFpPbamgaHiDSLpeqEo8f9NW9JMS43hyptWVUgT3zWS2ttB36rMsmWkGCZuUpJN+JmapEtnMOkzo9KcuOHwFCpdHMeddFVtRwORG7lmYETJEaa/nXydoOdZ9yBeeN5ocQUjnrnrJIAVbQkRw1HEV076DmVJXjcwyyGYnjHXTVI2utKlkncgZYPGL++l7O0cS86Gm1b7qwhsAm2b2jfQXJ7ATTWqE3bs7u0zaSda9zgcaRbb24nCdW0ElQyhIJN4SIvbs1rH4v6SSFFIw4sY9fX3UmCOmLxSBqa9Vi0DU8J/XbXJXPpAUVT1SOV1n8qi704UfZaE/eV+dKwo6xiTImIlBMeFSww3E/hHw7644rpcqN0oHcV/wDfVX/5FeaEdeEzpIKvLPmqlIXUbdOHkJYQoZSVQMyRdYKfWJ5DKRpqKwfRRlKscSQLg3jurQ7Y2Ul18Oq9IQFAENlIUDljNClAKWmTqZN45UwwG28AHAlnZ6FviQVBYZNtdBFJSTKcR2cCI1UO5R/Okm1cIQDvExwIB/rTrCY1xecraS0AYACyvgCb8dRe3dxK7bCpSrup+BLZj8AZcVfgr5V7tFUpieEdmnwAkk8yJqrZSpVP3Ve6KCxmJyqN+XwHLkONSykLEvFCiDTbCPBV+PMUjx7oN/17uOpPA1PZuLvXXxcns5eTjrRsMDtMpEK5kA6cdCOBq7FPg3FpgntiY9xN/wDakrLwAIPP8qqO0I3ZnW/ga6W1WTFJ2NFOrSpPLnRDz5VF+PupU3jEqAkxAvwsPD9X5zVuB2finFHqmXFpjMClCiCOwxB7ta4eSPXPg6oSsbvvJWkjMQdAB8SeAmOBm9EswU5VGFhIUkTEwbjS9r+FADortAnN6M9HLLHxq7/whtKc3o7gEaZkX8M1ZST8Dd+GDYdBQOrWtKGyYSuJgqJ1AvaxNvbHbR+IW2FpaklKAQTxnVSiY+0VDsy87B3gegD+IwylYhZZUMwSiAoiMqkrCkrgXKhlINYtvoztBTykHVKlJSYAkErIIHqhClE30BcExNQozUTKpKNF+3kJWVqa3kLUrIBJOQlWROX1rJA4aRzqrZbyilBmCPW7xII86dbJ6GbQWVbyWzZQ6zMkZTqLJzJIgAgxOvbTFH0f4rN9Y/hgSZkFwT2yUQT28aqLl5RpGTB8E4qSZEGI5zx+VHsNudXPEzHaOFQw/Q59O4MVhSq8S6oX4CMlPntnKaWlJcZi+YdYARa0BUTeKsoxHSdJEBUTF44aTRHRjZYdDTauoKVNuOb+FYdUMjgRGdxJJBzzfSIFtBulZ3z2f0p30IRvMf8Ax3/85qolsuOhsvo5mSG+uKUDRKGcOgDuAbtV7GzfRUICHXVALbSErVKYW4hKrADgo06baobare4n96z/AJzVLqV2BulH/Ln8SaxPSJZHVGP/ANdrTj9WjhW16WA+jH8SfjWI6RGAz+4a9yEVSIZnlYpRRMG4kD4UMvGLyW9aNKqdxZ6wjkJmgnHjmVyHHvqhEsXi1kRN7T863f0QYHM85ilCyPqm5+2oArI7QkpE/fVXMSVEwBJKoSBqSdAO0kiu8dGcInBtN4eZKAMx+0tW8s92ZRA7AOVTJ0hpFXT92XW+41zl/Dhbi5vCj8TW26YPZlNq7D8SKx+z1/XPfi+aqFlgVo2aPs0Q3s8fZo8KFWJWKoQF6B92km2ejjzoWtISlLKSpWc5CYBJCQRcwk8uF7082li3kQW0pUm2a5zC9yBpAF+etV9IXwUOAlRSoAqTCptvE3PCKiUmtAb/AGtsTFl1lLuIRAQ6oAFREI6tShGVIHCuX9HlRj1fiX8a7btoD0hn9xiv5Wa4psXBE4tx1LiJS44CgzPrG8ifhWjYJG/bXGftVP8AhTSba726ruoxTihO6eExvRYcppLtB4KSqDUrQ3sz2xiSr+FXlarcZ0OxSoeJyNOQpGkqAAFr/Kq9j+t3IPyp7hcWtLYbK1FM5gkkwk3iE6CxoQmJ8L0FzHfcIHMlPyM0UOhTTZlDwzRbNJAPOI+dErxpnWhlYommnQnkv/8ADDIjNiFnsAAB+fvonDbDwKZJSVd5UfcpRFLVYg86ZbJ2shoiWkKVN1u/WJ4kfVxbhee3sp235FSQ32dszDGFtYVCr6lCIkXN44W42tWm2K+tTiRlSlOhhUcJAAFtY7qvR0jxSRHVtmLHdMCNbDT+lTxfSJ5xtSEoSHCJTwuLwdCNOdN9apjp1gb7QwTqkgMZAokevIERfQEzpWJxHTDFqBCVAgEplKJBykpOo5jsp1szH4haIxh6hFwFMneJtacyiBE6AHtpEhtKJSDYqUbcSonz7SbnjUppoFFm26NOuLwKFuTmUV6iLBSgLdwpJiVhPWkgwBJAJBIGsEEEGKb7N2m0MGgZvVlJmJzAyePaPOsnjNsNKLgBO8kp4akRzok8DSyZ4dK2GlqV1TruoCHHQQPJsKkDme+as2b03wDi4fwqG08CJJnukW/V6WbYwjT28MqSLGOPI9p92ndSB3YYietPbZP6865U37OlxXo6TtXaGzlIHo2FLijO8EPECAeSgCZ4zFZdOEeJJLRiLJgpg87qm3aTW32DsJltpKGnHm91OYEpUCdSSCgcVG2aKE2v0aUTKcWmVaDqwAOyUOKjyr0IfTRf5SZxy5msRiYx3Zr5Hqf4k/nWh6MvlnqitKpS28k9hW42sadgPlQjWy8Q07Dv1iCDAaXeQUwTnCSBrxNHgITq0E/jfI+ZpcvFxp0m/wDQQnI0bXSIfY/xf0qON24hSQClQ+saPA+q42o/Cs36UgpMDCAwfVUHFeBgX7a1OAwTTjLedAMgGbgk2UDbwrnmpLTNouLWgfpHtFtzDkJJnMk3BGh56UuGyW3ktqcEhLSAEmQCQkSTz5ctdal0mwraGyG3BmkBSLEgHja400PyopuS22c3sJtHYO2iDb2KaXgrRgGRu9WiOwAVBWycJ/8AzoJPEifGoOFYPA+MVEvrA9U+F/hVkk29kYNCgsMpC0mUkBIIPAiBY1c/h2VHMpS5+6SPnfypc7jIF5Huqj0qeNICHSFxOVABJAzCVRMyeQArJYBX1z3afmqnO2VGAeE/r9dlZrDuhLjk8/maXkfgdqe/Ux8jQmJ2ilHrNux9pJkUMrGCpLfCm196PeT+VRyJVZUG7ocbO6XrbaIbS71QCs2ZLChBkqBzySIOlLm+lrTbiXG2UNkAxkw7CTOmYKCZBvFo1pS1iQGlI4rJ/wAVqX4loEo1m4FrGb6+FC/o3/D9CbUw2I9IZBSgHqcR7RNoZB4C+keNYbYWwmUpWslKluLUozwlRISJ5fGuq7RvimBrLOIHmWLVy3oTh3cY5iWBlQWDMqkBWZSgkc0ndJ41qyPBZi9nLkltZGUgAaiwTzpViw+QQ4Aq3rEXHiZPkafYzZ2KazEIUQlWUlMqAKQAdNPEUOcXnbUlQkkWP6/KpWgezE7HH1kfdP8Appk40PtHy/rSXDu9U4SQbgge6r1bRPKPD+tNAwxbSOaj4j8qrUUcj50ud2gaFcxhosVDhTiR7I8yfnU2XUkgQm5A0HG3Gs+l1atAT3AmjtmlYdaNhDiDKikAQoG4URI7KAo6didqZ1IUQVFIgk8cyXEOLTNsqVAK10TuzapYpGQodU4pH1W8kFUIcUjdVlnTMFEieU2uEeJffQtYUOr3oSFQVAueuhBA3k6pBsLkCYii1bRU62wFkBSxlUqTFgCFiUi5BTP2SY3q5U3HR1tJ7ANq9In4KetBAKUpnJGZRIJsgnKBN55azXm3MYpnMhG9kUUgqSeAF4SRqVC3CONDbJDaushEKAKpWZJOVR6qFaShoqCha6u6hcfjm1toSAetKMhcCfWWEgyT9oFKb8MxqlJ6F1iO3umDiEqw4SzlaB1bcQoxMkjrLGfjQ2I2kptSutS0YSSU74BIGYoHGLETbhagl4tLqMSICQsdcmbfWAAOJPDMBlTN7Am80m21iwpaVyVtzGYcJgQTpN+PKjtJyoOkUrGLe00PtF0NpRCsuWTOaJUAINgCO0yKP2HtFDSVqLDDvsw4pYIBmIgbpMG9/C9Zpl9AaSgkKSn2wqQSSVFZA04C9hYcKObQ4hN4zrAARFwRJGbtOseyAZ4gS1Wh72aZ3p/iVOygJbSsCEhZKUEAWAKDM3Ogql/pxiFyl1OHI9mWyCdOKFJGk6zMeWRw+FAORxclOmWUwoWJPMQbcL18okhSEqCzmMHtABvz7e6tvmn4Zl8cfRoTi1vD1GDBIgtEpA3bklziSRpwHOoo2hlXkbUjkMjSUyPtXJgH5jtpH1zjbd1ymYIAI1uqwmRKgO499Qe2ok5RCUwTYC6pANsuibJmezxly5JXbK6wXg1uFxqlZwt4kJEH1UpUSPVBAB99BHGmSkLcUiISnMogycoME5eIjsHbSVGNhJIQJE6EQnNrxudBHMV8MUpBBUq5SMoSJyJmZk2JvqREn7tZ1L2XcfRv8LiB/wANxI6kI6tTRzCCDnV6osLgRP4uFL9m7cJbTYWAGvK1R6NYdTuExrbclfVNmZhTis3WFIg7xI3TAvAHe26AbMWxglB1gBTry1lDoShXsoG45Bg5JFrzW3HF0c/LJWCHaQPCvfThRO2G2k2LLSFax1zTZ8usHwrI4naBzlKG1rPJH1vllBnwJrSpGfaJoF4ztqhzEA6wfAUtYwOMXH7K4J+2pto/3XFJVp2Uwe6MYpKsmZuYSr1iYCpi2WeB4RagYs2msQAABcVml4brHV3iD8a6C30OUofWYlA7EtqMx2qyx/dqWE6A4dS1D0pYWr1YCLG5EpNyLcCPCjyHgw7eyRxVVmIw6W0Qn2lCf4Qfzp9i+hTsbmLaUqYyr+ruLEWKrgg8qUudHMUhNwlVyZS6hXCB7U6/EVE9Fw2ANBHo3DOT4wFT8BRDqmS0lJO8ANB7X6tVz/Rd9GGQ9CytSylTIZXLYGcZ1LEgg5U/3xyq/p/sRrCYZtxh0rJdCFyttdlJUoQEgEXSbnnSWWN1R1rEuYBWIZKBh1tht3MG0pdBUSzk3WwcxgLi1r86p2ZhFsrcUy3iXkOKzAOZmAyL7qS4ps5OwJJ77RplGdVE+NVuIJ0We6SfdMituhj8hlcL0ixLXWpDQnrVE7rjsHdBGZMBUEG9KtpbReeUFLaRHFYayHxJVJHZWxwyX2cwGZQU4pZIB0WZiDe3Ma1a9hGH5zGFc4hQ7f8AemoYoTnk/PryjmUQmcp4cO/yoB3Efd95rtmE+j5LBcU2713WKzEOZQeJAFhzPHjVGK2IlB32kp5S2PcaOuB9snFFOLOjfuqIwr6tEq8BXZRs9sG3uEV6rBcjQKzkeH6OYpXsEd8D400w3QvFApVmSCCCLzcGRoL6V0A4NQ0VHnXhZdFx8PmJoCyhaXgEK6vOsZ5JJISVHMFJkWj1QOQ7TS7bO2AhtSAgIQ44lJmQW20wqUoKZV65A3hdKrCnzLzw1SFeXyFEeih2ZayKKS31iLKCVEEgLiR6ov2d9Y/Dm0bLnxTMRjdoBIWUYZpK3CqRKkjq0DJlgic2bfEhWqrmZoXY+zElpXVozuhsLG9BYcV9YEgqISSQpQOnqXnNbZY3oYkEFCyN4qywINkpPqxEJAEi8C81llYAohSSQSA5mC1A5JSOr47toi2tZu44NotSyhOxh0pQ3mhAC5dKxmHWoheY3gAkFO7Nr6Gak6B1aUKI6twFwJSkgBxcQlJI9WVHvJqbmAJKlFNirMSIInd9k8DKJtNu+qQhOcBSQm2aEKUkFViCYEQCoGP60bDRS0yrOQ6VIV6t0zJMpQ4SLCVG4754UV1oC1ZQUZEhEKmZVImdSQE3VxkXoBSm1Skytc3JKrydN7UTIiTapLezhSlJT1hsCBCjaxJkjTjI05QKHEEwxlvrW9BOcSpUpG7wBAJNrWnl3Ll48NhWRCUkqyg8ABe8akm/baq3HFgBoJSealKkE8ZBVAGtgBQ4w7iBBgiQbGb8PCqUfZLkVPOKWIQ4Vmb2F+HDTjx4mr8CzvKGbLa5UQItOsyOWtvCiVomVA5Z1hJuTpw8PKitk7CS+spBSCZMrUtKRFvZm+nCq/RP7BvSSoGJJMescswAAq8zcHjHjTXC4Vb7gKEgmAgAEhSoJsBeSc0AE391a/o/9GeGKf2jFkmBZoaXn1lpv/dHGuidG9g4DBz1OUrMStagpVuU2TM3ygTblT+Nsn5Uhb0I6Mussr9JQErUqUoBByISAkDdOWTE8ffA0n/Ckxukp/XhTNKgdKipFbRXVUjGX3O2Z/F7GgFUNqIBKZF84ByzIuM0Umw3XqSlfWB0KAUIgE5hxTAAAB/rWrxqihJUTYEE90ifdWRQ0sSAgKKd0ltQ6xWXdkndyi01W3klYI4l7KCFJjxKQDzvuR4VZj4PVulZCA0kH2ipUq0SkGVD8PG1RcxSWglS1QpXqtrVupGgWsxMToPaOnEiOKUD1C1ELMOICvUObcUcggRKZt2caTdvBSINYrNHVNqWDxUtKL90qX4ECvTjHkEKU2IBmylk6z7QQOHCpHEpEJUlYJ+02HT3EgKgdp91VY/FBSVJQ4hITBWboKRfiCImIA4weEkNpJWwRVt/GdU+pMbqoXIcKbHiRlVAkG9hegjthA9bOOZgGO5SN4Dty6axSPG7eGIVKt4tiEBMIKkJtmCgSSqNRA14zS9OLUoWQBy9df8AKEhPdpc1ipFNG32biwVKjKUONqTmSQb6pO7x9aOPjMZvF4lD6Ah5AdSY9a/cQdUnW4I1i3rUPs95bbqDZOuaMsQEqM91+MRNCKeS4kqUQFpH1gQJQoXhwCQB2xofMrtnI6wdaViEDWO/9afq9e+njmfA1i8Rj1nQE+FUjHODQR3mr7k/H6NwraPefGh1Y0HhSPA4+bLSQeYk/K3vpjIjmKpOzOSa2HoxahoqikbZMQoBQ4gikyOzyNSDnMR8KYrGzuFYdEpQUn7unkR8IoFexHR6ozDug0QxtNQGtHNbYVxAPdTwFiINqSYIg8QpIPhCga9Swgn1Y55QPhWlOObWIUkHvv8A7UI/gWlXQop94/P40UIow+xmleq6qeRt/vTBrZuXVOfuMe6k72FWn73demGzy+IiI5KP6IpgmebdZQlKSEx6wPik28wD4VzRDYUhUadUEjsh0JP67a6htfDrO8LpI3gbgHl3dtZjFbIaANsgIjcP3kr0MgXTXPycTllHTx8qiqZz5hIKbHVMdl1YeP5qRgQ4dLpEdx6m3fFbp7YiUwEKsABBTBN2zOYG5+r5DXsrNJ6PPoWCrKoWFp0+qGhA+wT4is1xTV4NXzQfkzWBb+sX+NJHipf9KsQLj8IPkk0YjZGIQsktmJToUnQqJtPbQysOsEShQ3YNvux8apxlehKca2UPjfsOJ+IHzr1zn2A+WT869dYWpZITaRrHME1cjZrqotbLGvd+VHVh2j7K1GW+4IPvM/CmeAxGQrIVB4EaxnJ+BrzD7JWLK0iDAi1o+Hvplh8A2LqF+2TPypqDsmXIqHuzdpFQHPmLH3U6axubVR/i/U1n2FRYIEdlo8aLbeVxHga1OcbIcIMpUR2gkfCj2NsPp0dPjvVnQ8RctqHakz+VFNLCtCSeWnxoyGB67t91SShZSQRBI3Y8eFUuLSMzjid0pClEEpUXEw3kBBFj9UAJE5jSlQN5TP4p+MeM+NXYlwJQWkE5m4dKVGdfWbuYUUolZk6hJ7htlRJpxDkqcLhSpZlWdIUgKgDKg6wBYE2tU8SkFtcJRulLm4ShRiUOFSgSZyns9XyHQ9F1N5SPaQokJ8Y3j3VJl5IIKFXG9lUACQdSTYib6z8qb1gZUknNkaUsE2hKgEyYuVEBZ7TPOaz/AEv2jJ9GbXmS3PWkAgOOGMwJvoRHMCBzlztN9WHSWkKJcczBBJkNM2vBtmhUC94F/WFZXHSkXAPasZZOpNpk1nKXYpKhUwchSQtKSDOWJGptMaEfGjnctlhSwlfsjeAPFMA2HKgi7PtoA+yEqMXPH31dhHhvNkqhdxIgBadI11Fv96h4yP8AQVh8qUrUEZYGUZjYqX8IAnxqgvlBzDq0EGRBJCuaSdLi1TcSEBLcCQMxBVAKlXI7YsPCqQAkxuifZCSZ7ZNqaVgdDxDKeZV7qHGQexPefyo5a54edRURyE91PoUpkWcbB9UR30QccOCaDWidIHcKDdSq9/fTUaBux4jFjjb9efx7quQZuLjs8tazbSDzk939RTPCmOJnwHyvVdjN8foZdXytViFlNBpxNwDxMAjnwHMfq9Eg1SZk40FIfB7KsS7HHy/KggeVSDlOxUHpxPOrQ5ypeHBxr0L5U7Chn1qvtW5a+6hF4XiLGqU4vhV7b00ADuMqHsx2gAUKpmnTWI8asOHaXqIPMfqKYGZdwCD6wv2GhV7HbIsn51qHtkK1SQrvt+dKn0FJykQaVsKQjc2On7I8h8qo/wCFlN0j4U8UuKiVA8IosloS9Uoap8j+dT11APeIpitr9fq1LcTtJpEgquNQEme7lRgLZEiNQe+q1rHA+YoZvpClU9U2pca3CY7wbHwNC4ja7xt9UjhISVHyP51DkkaKEnpDJKzw935V4cahJuQD21n3isglS1HskAeUEjzoUMTbKDyzEq+M1PdFrifk1jG3GlqiQrIM6gCZ3SIEayVFIjjV+CxxESEqXqoEQoFUqXY6kknSseth0CUqCf1yohO03P8AzEhQjUR/Kq/+Okpovo0jTlTaFZZyqEZNUyk3CjrJFwZIuk6VYFhKVPLWFNIEkECXFk7glNjKoF58KS4LGNPfVNqhYuEqSZvqkgynKY0zGCARUtoO3ZaSDCB1rmXd31bqYF9ACLcafbx5F1JqLqkKcWCXsxcBEKsQM7aSIJgBMc8tJsfjCq8iOClgqJ04RApuh5eYZVgq++CCI4bm6fKgdpYZSFpypkLvqNw2lNxpNxFJ/bgNiVSibwTrdJyTc35irMOkZs6tEXhSgQVn1BJHO/gKExqkFwgpWVkwIUEgybcbair8VDaeqSM2W6pPrKPMkE2FhUv0MIddzIzqUkKTCXBYgz6qh36cpqnrUwbKI5G0dtzpVOEcKSN0BJ3VJF7KsNdbkd1SWtIJKiVBKo1O8rlGkcfdRrAbP//Z"
    },
    {
      "title": "SHOP LIVING",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT0z5_4VYekUcoWkpilgc4TjiKrFbjQGcpXA&s"
    }
  ]

}
